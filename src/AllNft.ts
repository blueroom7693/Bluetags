export interface nftType {
  [key: string]: { title: string; logourl: string; rgba: string };
}
interface nftTypenonChain {
  [key: string]: {
    chain: string;
    title: string;
    logourl: string;
    rgba: string;
  };
}

interface chainType {
  [key: string]: nftType;
}

export const AllNft: chainType = {
  eth: {
    cryptopunks: {
      title: "CryptoPunks",
      logourl:
        "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s168",
      rgba: "#638596",
    },
    boredapeyachtclub: {
      title: "Bored Ape Yacht Club",
      logourl:
        "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s168",
      rgba: "#000000",
    },
    otherdeedforotherside: {
      title: "Otherdeed for Otherside",
      logourl:
        "https://lh3.googleusercontent.com/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI=s168",
      rgba: "#000000",
    },
    azuki: {
      title: "Azuki",
      logourl:
        "https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s168",
      rgba: "#BC3748",
    },
    clonex: {
      title: "CLONE-X",
      logourl:
        "https://lh3.googleusercontent.com/XN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg=s168",
      rgba: "#009ADF",
    },
  },
  sol: {
    okaybears: {
      title: "Okay Bears",
      logourl:
        "https://lh3.googleusercontent.com/cgFAvnBcqoDZCIPUgRdYGQGdPR5HFBHgXOfKsc4-r-1Cpw9a1GEnKELv48wTF5BInT6J5Fyvu-J0ZDEIjb57YaWiwsIhh7k095sxQfE=s168",
      rgba: "#19AB6E",
    },
    degods: {
      title: "DeGods",
      logourl:
        "https://lh3.googleusercontent.com/OYvE-daPlxRCqry6lJY2SaXKodbD1-2jTucE7l2iEb50no017kXDuu9uYVt44To6930sL3xtSrm3XpSedtpXbcIydIv-xK0WLIxx=s168",
      rgba: "#000000",
    },
    trippinapetribe: {
      title: "Trippin`Ape Tribe",
      logourl:
        "https://lh3.googleusercontent.com/Hw6Zs9msqM-bN7frloghQL41uNfEE1AMJg6iHwyjMOXed-oxFwGXyvmfpOHrebZRT9UXjjcNFOvKO3nvtvG807tlCZsY07kuMHRWAio=s168",
      rgba: "#000000",
    },
    cetsoncreck: {
      title: "Cets on Creck",
      logourl:
        "https://lh3.googleusercontent.com/kMVcTy0HKYRkevj4AkM9x7usYDDxZDZcqcsT-4fwMqvrVqGErxMAtHbRPgDnwZGSREDTmksGGuguzWaTcuD-CQpPVJFE33GhW7HyZg=s168",
      rgba: "#000000",
    },
    primates: {
      title: "Primates",
      logourl:
        "https://openseauserdata.com/files/89e468471b05a0d3f49b0b14def8879a.gif",
      rgba: "#97FD9B",
    },
  },
  klay: {
    themetakongzklaytn: {
      title: "THE META KONGZ KLAYTN",
      logourl:
        "https://lh3.googleusercontent.com/AX_uuKN-OFhtHXtzw5PJ3K-bGW5tg2svacBEv8xO_ii3UCEo6UTjqec4MiXFGP3gsxPD-p-W0d315pEvIOxG3pKNWfT3G8KvAgIl=s168",
      rgba: "#000000",
    },
    metatoydragonz: {
      title: "Meta Toy DragonZ",
      logourl:
        "https://lh3.googleusercontent.com/02PLvfCkPwgAeWBEmRa0HjdfXAabG4-fE9zIrNmecO2YMJUax-ZzvlkqNzT7w2GS19-9us0eoFWvd7S6O2DrSKdW3DrXVlegY1Hefg=s168",
      rgba: "#64B9F4",
    },
    sunmiyaclubofficial: {
      title: "Sunmiya Club Official",
      logourl:
        "https://lh3.googleusercontent.com/UEltltZRWTPLVS05D6KYdo18nEZ7Ba4n8rj_OlDh8mnM3_oWassvQ0VDCqCMHHMDe2MruYUVOHhu5MGBRk40Sg09C-M8z3IIZPD8=s168",
      rgba: "#CC4DFF",
    },
    sheepfarm: {
      title: "SheepFarm",
      logourl:
        "https://lh3.googleusercontent.com/ynlAQE698lEpXooP100VUIGQIUdFapJZweh8WhPuvnucEuRv5DcL0PFo80dgkdiQY3ydUaTl7ZzsGl51NCNpuAp-Wxswlq1O6RS6JQ=s168",
      rgba: "#583C2F",
    },
  },
};

export const AllNftNonChain: nftTypenonChain = {
  cryptopunks: {
    chain: "eth",
    title: "CryptoPunks",
    logourl:
      "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s168",
    rgba: "#638596",
  },
  boredapeyachtclub: {
    chain: "eth",
    title: "Bored Ape Yacht Club",
    logourl:
      "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s168",
    rgba: "#000000",
  },
  otherdeedforotherside: {
    chain: "eth",
    title: "Otherdeed for Otherside",
    logourl:
      "https://lh3.googleusercontent.com/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI=s168",
    rgba: "#000000",
  },
  azuki: {
    chain: "eth",
    title: "Azuki",
    logourl:
      "https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s168",
    rgba: "#BC3748",
  },
  clonex: {
    chain: "eth",
    title: "CLONE-X",
    logourl:
      "https://lh3.googleusercontent.com/XN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg=s168",
    rgba: "#009ADF",
  },

  okaybears: {
    chain: "sol",
    title: "Okay Bears",
    logourl:
      "https://lh3.googleusercontent.com/cgFAvnBcqoDZCIPUgRdYGQGdPR5HFBHgXOfKsc4-r-1Cpw9a1GEnKELv48wTF5BInT6J5Fyvu-J0ZDEIjb57YaWiwsIhh7k095sxQfE=s168",
    rgba: "#19AB6E",
  },
  degods: {
    chain: "sol",
    title: "DeGods",
    logourl:
      "https://lh3.googleusercontent.com/OYvE-daPlxRCqry6lJY2SaXKodbD1-2jTucE7l2iEb50no017kXDuu9uYVt44To6930sL3xtSrm3XpSedtpXbcIydIv-xK0WLIxx=s168",
    rgba: "#000000",
  },
  trippinapetribe: {
    chain: "sol",
    title: "Trippin`Ape Tribe",
    logourl:
      "https://lh3.googleusercontent.com/Hw6Zs9msqM-bN7frloghQL41uNfEE1AMJg6iHwyjMOXed-oxFwGXyvmfpOHrebZRT9UXjjcNFOvKO3nvtvG807tlCZsY07kuMHRWAio=s168",
    rgba: "#000000",
  },
  cetsoncreck: {
    chain: "sol",
    title: "Cets on Creck",
    logourl:
      "https://lh3.googleusercontent.com/kMVcTy0HKYRkevj4AkM9x7usYDDxZDZcqcsT-4fwMqvrVqGErxMAtHbRPgDnwZGSREDTmksGGuguzWaTcuD-CQpPVJFE33GhW7HyZg=s168",
    rgba: "#000000",
  },
  primates: {
    chain: "sol",
    title: "Primates",
    logourl:
      "https://openseauserdata.com/files/89e468471b05a0d3f49b0b14def8879a.gif",
    rgba: "#97FD9B",
  },
  themetakongzklaytn: {
    chain: "klay",
    title: "THE META KONGZ KLAYTN",
    logourl:
      "https://lh3.googleusercontent.com/AX_uuKN-OFhtHXtzw5PJ3K-bGW5tg2svacBEv8xO_ii3UCEo6UTjqec4MiXFGP3gsxPD-p-W0d315pEvIOxG3pKNWfT3G8KvAgIl=s168",
    rgba: "#000000",
  },
  metatoydragonz: {
    chain: "klay",
    title: "Meta Toy DragonZ",
    logourl:
      "https://lh3.googleusercontent.com/02PLvfCkPwgAeWBEmRa0HjdfXAabG4-fE9zIrNmecO2YMJUax-ZzvlkqNzT7w2GS19-9us0eoFWvd7S6O2DrSKdW3DrXVlegY1Hefg=s168",
    rgba: "#64B9F4",
  },
  sunmiyaclubofficial: {
    chain: "klay",
    title: "Sunmiya Club Official",
    logourl:
      "https://lh3.googleusercontent.com/UEltltZRWTPLVS05D6KYdo18nEZ7Ba4n8rj_OlDh8mnM3_oWassvQ0VDCqCMHHMDe2MruYUVOHhu5MGBRk40Sg09C-M8z3IIZPD8=s168",
    rgba: "#CC4DFF",
  },
  sheepfarm: {
    chain: "klay",
    title: "SheepFarm",
    logourl:
      "https://lh3.googleusercontent.com/ynlAQE698lEpXooP100VUIGQIUdFapJZweh8WhPuvnucEuRv5DcL0PFo80dgkdiQY3ydUaTl7ZzsGl51NCNpuAp-Wxswlq1O6RS6JQ=s168",
    rgba: "#583C2F",
  },
};
