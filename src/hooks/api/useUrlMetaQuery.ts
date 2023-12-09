import { useState } from "react";
import axios, { AxiosResponse } from "axios";

import { API_ENDPOINT } from "config/env";
import { LinkMetaT } from "interface/db/utils.types";

export default function useUrlMetaQuery() {
  const [loadingMeta, setLoadingMeta] = useState(true);

  const [meta, setMeta] = useState<LinkMetaT>({
    url: null,
    date: null,
    logo: null,
    image: null,
    title: null,
    author: null,
    publisher: null,
    description: null,
  });

  const getMeta = async (url: string) => {
    try {
      setLoadingMeta(true);

      const { data }: AxiosResponse<LinkMetaT> = await axios.post(
        `${API_ENDPOINT}/utils/meta`,
        { url }
      );

      setMeta((prev) => ({
        ...prev,
        ...data,
      }));
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingMeta(false);
    }
  };

  const [loadingMetaAssets, setLoadingMetaAssets] = useState(true);

  const [metaAssets, setMetaAssets] = useState<Array<LinkMetaT>>([]);

  const getMetaAssets = async (urls: Array<string>) => {
    try {
      setLoadingMetaAssets(true);

      const { data }: AxiosResponse<Array<LinkMetaT>> = await axios.post(
        `${API_ENDPOINT}/utils/meta/all`,
        { urls }
      );

      setMetaAssets((prev) => data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingMetaAssets(false);
    }
  };

  return {
    getMeta,
    loadingMeta,
    meta,
    getMetaAssets,
    loadingMetaAssets,
    metaAssets,
  };
}
