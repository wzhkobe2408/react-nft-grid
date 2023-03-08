import { request } from "../request";

export type NFTItem = {
  thumbnail: string;
  title: string;
  id: string;
  currentPrice: string;
  description: string;
  ownerAddress: string;
  ownerName: string;
  lastSale: string;
};

export const getNFTList = async (address: string): Promise<Array<NFTItem>> => {
  const resp = await request<Array<NFTItem>>({
    url: `/api/nfts/${address}`,
    method: "GET",
  });

  return resp;
};
