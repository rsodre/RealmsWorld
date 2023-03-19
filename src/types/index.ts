export interface Token {
  contract: string;
  tokenId: string;
  name: string;
  description: string;
  image: string;
  media: string | null;
  kind: string;
  isFlagged: boolean;
  lastFlagUpdate: string;
  lastFlagChange: string | null;
  rarity: number;
  rarityRank: number;
  collection: {
    id: string;
    name: string;
    image: string;
    slug: string;
  };
  lastBuy: {
    value: number;
    timestamp: number;
  };
  lastSell: {
    value: number | null;
    timestamp: number | null;
  };
  owner: string;
}

export interface Market {
  floorAsk: {
    id: string;
    price: {
      currency: {
        contract: string;
        name: string;
        symbol: string;
        decimals: number;
      };
      amount: {
        raw: string;
        decimal: number;
        usd: number;
        native: number;
      };
    };
    maker: string;
    validFrom: number;
    validUntil: number;
    source: {
      id: string;
      domain: string;
      name: string;
      icon: string;
      url: string;
    };
  };
}

export interface TokenMarketData {
  token: Token;
  market: Market;
}

export interface Collection {
  id: string;
  slug: string;
  createdAt: string;
  name: string;
  image: string;
  banner: string;
  discordUrl: string;
  externalUrl: string;
  twitterUsername: string;
  openseaVerificationStatus: string;
  description: string;
  sampleImages: string[];
  tokenCount: string;
  onSaleCount: string;
  primaryContract: string;
  tokenSetId: string;
  royalties: {
    recipient: string;
    breakdown: {
      bps: number;
      recipient: string;
    }[];
    bps: number;
  };
  allRoyalties: {
    opensea: {
      bps: number;
      recipient: string;
    }[];
  };
  lastBuy: {
    value: null;
  };
  floorAsk: {
    id: string;
    sourceDomain: string;
    price: {
      currency: {
        contract: string;
        name: string;
        symbol: string;
        decimals: number;
      };
      amount: {
        raw: string;
        decimal: number;
        usd: number;
        native: number;
      };
    };
    maker: string;
    validFrom: number;
    validUntil: number;
    token: {
      contract: string;
      tokenId: string;
      name: string;
      image: string;
    };
  };
  rank: {
    "1day": number;
    "7day": number;
    "30day": number;
    allTime: number;
  };
  volume: {
    "1day": number;
    "7day": number;
    "30day": number;
    allTime: number;
  };
  volumeChange: {
    "1day": number;
    "7day": number;
    "30day": number;
  };
  floorSale: {
    "1day": number;
    "7day": number;
    "30day": number;
  };
  floorSaleChange: {
    "1day": number;
    "7day": number;
    "30day": number;
  };
  collectionBidSupported: boolean;
  contractKind: string;
}

export interface Activity {
  type: string;
  fromAddress: string;
  toAddress: string | null;
  price: number;
  amount: number;
  timestamp: number;
  createdAt: string;
  contract: string;
  token: {
    tokenId: string | null;
    tokenName: string | null;
    tokenImage: string | null;
  };
  collection: {
    collectionId: string;
    collectionImage: string;
    collectionName: string;
  };
  order: {
    id: string;
    side: string;
    source: {
      domain: string;
      name: string;
      icon: string;
    };
    criteria: {
      kind: string;
      data: {
        collection: {
          id: string;
          name: string;
          image: string;
        };
      };
    };
  };
}