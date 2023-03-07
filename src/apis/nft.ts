import { request } from "../request";

export type NFTItem = {};

export const getNFTList = async (address: string): Promise<Array<NFTItem>> => {
  const resp = await request<Array<NFTItem>>({
    url: `/api/nfts/${address}`,
    method: "GET",
  });

  return resp;
};
