import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useHash(name) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onHashChangeStart = (path) => {
    const [_, hash] = _getUrl(path);
    if (hash && hash == name) setOpen(true);
    else setOpen(false);
  };

  useEffect(() => {
    onHashChangeStart(router.asPath);
  }, [router]);

  useEffect(() => {
    router.events.on("hashChangeStart", onHashChangeStart);
    return () => router.events.off("hashChangeStart", onHashChangeStart);
  }, [router.events]);

  function disable() {
    router.back();
  }
  function enable() {
    console.log("LOGIN", router.asPath);
    const [url] = _getUrl(router.asPath);
    router.push(`${url}#${name}`);
  }
  function _getUrl(path) {
    return path.split("#");
  }

  return {
    open,
    enable,
    disable,
  };
}
