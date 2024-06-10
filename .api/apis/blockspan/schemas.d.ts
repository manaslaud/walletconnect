declare const FindExchangeCollections: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["eth-main", "arbitrum-main", "optimism-main", "poly-main", "bsc-main", "eth-goerli", "eth-sepolia"];
                    readonly default: "eth-main";
                    readonly examples: readonly ["eth-main"];
                    readonly description: "Blockchain from which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly exchange: {
                    readonly type: "string";
                    readonly enum: readonly ["opensea", "looksrare"];
                    readonly default: "opensea";
                    readonly description: "The marketplace exchange for which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly q: {
                    readonly type: "string";
                    readonly default: "Ape";
                    readonly examples: readonly ["Ape"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The search string for which to return results.";
                };
                readonly filter: {
                    readonly type: "string";
                    readonly enum: readonly ["key", "name", "description"];
                    readonly default: "name";
                    readonly examples: readonly ["name"];
                    readonly description: "The search fields to match on.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Pass the cursor value from previous response to fetch next set of results.";
                };
                readonly page_size: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly default: 25;
                    readonly examples: readonly [25];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results per page.";
                };
            };
            readonly required: readonly ["chain", "exchange", "q", "filter"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly examples: readonly ["eth-main"];
                };
                readonly exchange: {
                    readonly type: "string";
                    readonly examples: readonly ["opensea"];
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly examples: readonly ["KGpzb24pIjB4NDFmNTZiMDAwZmZmZTE3OTQzZmI0YzE4MmMxMjM3NjdhZjcxZDAwNSI"];
                };
                readonly per_page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [25];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly properties: {
                            readonly exchange: {
                                readonly type: "string";
                                readonly examples: readonly ["opensea"];
                            };
                            readonly update_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2022-10-05T20:31:26.621Z"];
                            };
                            readonly key: {
                                readonly type: "string";
                                readonly examples: readonly ["boredapeyachtclub"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Bored Ape Yacht Club"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly examples: readonly ["The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles ..."];
                            };
                            readonly exchange_url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://opensea.io/collection/boredapeyachtclub"];
                            };
                            readonly external_url: {
                                readonly type: "string";
                                readonly examples: readonly ["http://www.boredapeyachtclub.com/"];
                            };
                            readonly banner_image_url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://i.seadn.io/gae/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs?w=500&auto=format"];
                            };
                            readonly featured_image_url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://i.seadn.io/gae/RBX3jwgykdaQO3rjTcKNf5OVwdukKO46oOAV3zZeiaMb8VER6cKxPDTdGZQdfWcDou75A8KtVZWM_fEnHG4d4q6Um8MeZIlw79BpWPA?w=500&auto=format"];
                            };
                            readonly large_image_url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://i.seadn.io/gae/RBX3jwgykdaQO3rjTcKNf5OVwdukKO46oOAV3zZeiaMb8VER6cKxPDTdGZQdfWcDou75A8KtVZWM_fEnHG4d4q6Um8MeZIlw79BpWPA?w=500&auto=format"];
                            };
                            readonly image_url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?w=500&auto=format"];
                            };
                            readonly chat_url: {
                                readonly type: "string";
                            };
                            readonly discord_url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://discord.gg/3P5K3dzgdB"];
                            };
                            readonly telegram_url: {
                                readonly type: "string";
                            };
                            readonly twitter_username: {
                                readonly type: "string";
                                readonly examples: readonly ["BoredApeYC"];
                            };
                            readonly wiki_url: {
                                readonly type: "string";
                            };
                            readonly instagram_username: {
                                readonly type: "string";
                            };
                            readonly stats: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly market_cap: {
                                        readonly type: "number";
                                        readonly examples: readonly [1362173.6646153848];
                                    };
                                    readonly num_owners: {
                                        readonly type: "number";
                                        readonly examples: readonly [6427];
                                    };
                                    readonly floor_price: {
                                        readonly type: "number";
                                        readonly examples: readonly [0];
                                    };
                                    readonly floor_price_symbol: {
                                        readonly type: "string";
                                        readonly examples: readonly ["ETH"];
                                    };
                                    readonly total_minted: {
                                        readonly type: "number";
                                        readonly examples: readonly [9998];
                                    };
                                    readonly total_supply: {
                                        readonly type: "number";
                                        readonly examples: readonly [9998];
                                    };
                                    readonly total_volume: {
                                        readonly type: "number";
                                        readonly examples: readonly [670210.9884434949];
                                    };
                                    readonly one_day_volume: {
                                        readonly type: "number";
                                        readonly examples: readonly [173.2];
                                    };
                                    readonly seven_day_volume: {
                                        readonly type: "number";
                                        readonly examples: readonly [1771.18];
                                    };
                                    readonly thirty_day_volume: {
                                        readonly type: "number";
                                        readonly examples: readonly [10528.511809999996];
                                    };
                                    readonly one_day_volume_change: {
                                        readonly type: "number";
                                        readonly examples: readonly [-196.76640100000003];
                                    };
                                    readonly seven_day_volume_change: {
                                        readonly type: "number";
                                        readonly examples: readonly [368.9941680000006];
                                    };
                                    readonly thirty_day_volume_change: {
                                        readonly type: "number";
                                        readonly examples: readonly [211.18794129058824];
                                    };
                                    readonly total_sales: {
                                        readonly type: "number";
                                        readonly examples: readonly [27150];
                                    };
                                    readonly one_day_sales: {
                                        readonly type: "number";
                                        readonly examples: readonly [2];
                                    };
                                    readonly seven_day_sales: {
                                        readonly type: "number";
                                        readonly examples: readonly [13];
                                    };
                                    readonly thirty_day_sales: {
                                        readonly type: "number";
                                        readonly examples: readonly [115];
                                    };
                                    readonly total_average_price: {
                                        readonly type: "number";
                                        readonly examples: readonly [24.685487603811968];
                                    };
                                    readonly one_day_average_price: {
                                        readonly type: "number";
                                        readonly examples: readonly [86.6];
                                    };
                                    readonly seven_day_average_price: {
                                        readonly type: "number";
                                        readonly examples: readonly [136.2446153846154];
                                    };
                                    readonly thirty_day_average_price: {
                                        readonly type: "number";
                                        readonly examples: readonly [91.55227660869562];
                                    };
                                };
                            };
                            readonly contracts: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly contract_address: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                                        };
                                    };
                                };
                            };
                        };
                        readonly type: "object";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAddressOfEnsName: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly default: "coinbase.eth";
                    readonly examples: readonly ["coinbase.eth"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ENS name";
                };
            };
            readonly required: readonly ["name"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly address: {
                    readonly type: "string";
                    readonly examples: readonly ["0x81b287c0992b110adeb5903bf7e2d9350c80581a"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAllCollections: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["eth-main", "arbitrum-main", "optimism-main", "poly-main", "bsc-main", "eth-goerli", "eth-sepolia"];
                    readonly default: "eth-main";
                    readonly examples: readonly ["eth-main"];
                    readonly description: "Blockchain from which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly token_type: {
                    readonly type: "string";
                    readonly enum: readonly ["erc721", "erc1155"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The token type for which to return results.";
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Pass the cursor value from previous response to fetch next set of results.";
                };
                readonly page_size: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly default: 25;
                    readonly examples: readonly [25];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results per page.";
                };
                readonly history: {
                    readonly type: "string";
                    readonly enum: readonly ["all"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retrieve all historical records.";
                };
            };
            readonly required: readonly ["chain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly examples: readonly ["eth-main"];
                };
                readonly total: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [200];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly examples: readonly ["KGpzb24pIjB4NDFmNTZiMDAwZmZmZTE3OTQzZmI0YzE4MmMxMjM3NjdhZjcxZDAwNSI"];
                };
                readonly per_page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [25];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly token_type: {
                                readonly type: "string";
                                readonly examples: readonly ["erc721"];
                            };
                            readonly contract_address: {
                                readonly type: "string";
                                readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Bored Ape Yacht Club"];
                            };
                            readonly symbol: {
                                readonly type: "string";
                                readonly examples: readonly ["BAYC"];
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2022-04-25T19:22:03.000Z"];
                            };
                            readonly total_tokens: {
                                readonly type: "string";
                                readonly examples: readonly ["10000"];
                            };
                            readonly total_transfers: {
                                readonly type: "string";
                                readonly examples: readonly ["3457"];
                            };
                            readonly functions: {
                                readonly type: "string";
                                readonly examples: readonly ["[mintTo(address), safeTransferFrom(address,address,uint256,bytes)..."];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAllExchangeCollections: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["eth-main", "arbitrum-main", "optimism-main", "poly-main", "bsc-main", "eth-goerli", "eth-sepolia"];
                    readonly default: "eth-main";
                    readonly examples: readonly ["eth-main"];
                    readonly description: "Blockchain from which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly exchange: {
                    readonly type: "string";
                    readonly enum: readonly ["opensea", "looksrare"];
                    readonly default: "opensea";
                    readonly description: "The marketplace exchange for which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Pass the cursor value from previous response to fetch next set of results.";
                };
                readonly page_size: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly default: 25;
                    readonly examples: readonly [25];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results per page.";
                };
            };
            readonly required: readonly ["chain", "exchange"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly examples: readonly ["eth-main"];
                };
                readonly exchange: {
                    readonly type: "string";
                    readonly examples: readonly ["opensea"];
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly examples: readonly ["KGpzb24pIjB4NDFmNTZiMDAwZmZmZTE3OTQzZmI0YzE4MmMxMjM3NjdhZjcxZDAwNSI"];
                };
                readonly per_page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [25];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly properties: {
                            readonly exchange: {
                                readonly type: "string";
                                readonly examples: readonly ["opensea"];
                            };
                            readonly update_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2022-10-05T20:31:26.621Z"];
                            };
                            readonly key: {
                                readonly type: "string";
                                readonly examples: readonly ["boredapeyachtclub"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Bored Ape Yacht Club"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly examples: readonly ["The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles ..."];
                            };
                            readonly exchange_url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://opensea.io/collection/boredapeyachtclub"];
                            };
                            readonly external_url: {
                                readonly type: "string";
                                readonly examples: readonly ["http://www.boredapeyachtclub.com/"];
                            };
                            readonly banner_image_url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://i.seadn.io/gae/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs?w=500&auto=format"];
                            };
                            readonly featured_image_url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://i.seadn.io/gae/RBX3jwgykdaQO3rjTcKNf5OVwdukKO46oOAV3zZeiaMb8VER6cKxPDTdGZQdfWcDou75A8KtVZWM_fEnHG4d4q6Um8MeZIlw79BpWPA?w=500&auto=format"];
                            };
                            readonly large_image_url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://i.seadn.io/gae/RBX3jwgykdaQO3rjTcKNf5OVwdukKO46oOAV3zZeiaMb8VER6cKxPDTdGZQdfWcDou75A8KtVZWM_fEnHG4d4q6Um8MeZIlw79BpWPA?w=500&auto=format"];
                            };
                            readonly image_url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?w=500&auto=format"];
                            };
                            readonly chat_url: {
                                readonly type: "string";
                            };
                            readonly discord_url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://discord.gg/3P5K3dzgdB"];
                            };
                            readonly telegram_url: {
                                readonly type: "string";
                            };
                            readonly twitter_username: {
                                readonly type: "string";
                                readonly examples: readonly ["BoredApeYC"];
                            };
                            readonly wiki_url: {
                                readonly type: "string";
                            };
                            readonly instagram_username: {
                                readonly type: "string";
                            };
                            readonly stats: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly market_cap: {
                                        readonly type: "number";
                                        readonly examples: readonly [1362173.6646153848];
                                    };
                                    readonly num_owners: {
                                        readonly type: "number";
                                        readonly examples: readonly [6427];
                                    };
                                    readonly floor_price: {
                                        readonly type: "number";
                                        readonly examples: readonly [0];
                                    };
                                    readonly floor_price_symbol: {
                                        readonly type: "string";
                                        readonly examples: readonly ["ETH"];
                                    };
                                    readonly total_minted: {
                                        readonly type: "number";
                                        readonly examples: readonly [9998];
                                    };
                                    readonly total_supply: {
                                        readonly type: "number";
                                        readonly examples: readonly [9998];
                                    };
                                    readonly total_volume: {
                                        readonly type: "number";
                                        readonly examples: readonly [670210.9884434949];
                                    };
                                    readonly one_day_volume: {
                                        readonly type: "number";
                                        readonly examples: readonly [173.2];
                                    };
                                    readonly seven_day_volume: {
                                        readonly type: "number";
                                        readonly examples: readonly [1771.18];
                                    };
                                    readonly thirty_day_volume: {
                                        readonly type: "number";
                                        readonly examples: readonly [10528.511809999996];
                                    };
                                    readonly one_day_volume_change: {
                                        readonly type: "number";
                                        readonly examples: readonly [-196.76640100000003];
                                    };
                                    readonly seven_day_volume_change: {
                                        readonly type: "number";
                                        readonly examples: readonly [368.9941680000006];
                                    };
                                    readonly thirty_day_volume_change: {
                                        readonly type: "number";
                                        readonly examples: readonly [211.18794129058824];
                                    };
                                    readonly total_sales: {
                                        readonly type: "number";
                                        readonly examples: readonly [27150];
                                    };
                                    readonly one_day_sales: {
                                        readonly type: "number";
                                        readonly examples: readonly [2];
                                    };
                                    readonly seven_day_sales: {
                                        readonly type: "number";
                                        readonly examples: readonly [13];
                                    };
                                    readonly thirty_day_sales: {
                                        readonly type: "number";
                                        readonly examples: readonly [115];
                                    };
                                    readonly total_average_price: {
                                        readonly type: "number";
                                        readonly examples: readonly [24.685487603811968];
                                    };
                                    readonly one_day_average_price: {
                                        readonly type: "number";
                                        readonly examples: readonly [86.6];
                                    };
                                    readonly seven_day_average_price: {
                                        readonly type: "number";
                                        readonly examples: readonly [136.2446153846154];
                                    };
                                    readonly thirty_day_average_price: {
                                        readonly type: "number";
                                        readonly examples: readonly [91.55227660869562];
                                    };
                                };
                            };
                            readonly contracts: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly contract_address: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                                        };
                                    };
                                };
                            };
                        };
                        readonly type: "object";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAllNfTs: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["eth-main", "arbitrum-main", "optimism-main", "poly-main", "bsc-main", "eth-goerli", "eth-sepolia"];
                    readonly default: "eth-main";
                    readonly examples: readonly ["eth-main"];
                    readonly description: "Blockchain from which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly token_type: {
                    readonly type: "string";
                    readonly enum: readonly ["erc721", "erc1155"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The token type for which to return results.";
                };
                readonly include_current_owners: {
                    readonly type: "string";
                    readonly default: "true";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to false to exclude returning current owners, default is true.";
                };
                readonly include_recent_price: {
                    readonly type: "string";
                    readonly default: "true";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to false to exclude returning recent price, default is true.";
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Pass the cursor value from previous response to fetch next set of results.";
                };
                readonly page_size: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly default: 25;
                    readonly examples: readonly [25];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results per page.";
                };
            };
            readonly required: readonly ["chain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly examples: readonly ["eth-main"];
                };
                readonly total: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [200];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly examples: readonly ["KGpzb24pIjB4NDFmNTZiMDAwZmZmZTE3OTQzZmI0YzE4MmMxMjM3NjdhZjcxZDAwNSI"];
                };
                readonly per_page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [25];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly token_type: {
                                readonly type: "string";
                                readonly examples: readonly ["erc721"];
                            };
                            readonly contract_address: {
                                readonly type: "string";
                                readonly examples: readonly ["0x2f329de74f67e2c1c5d2a6487ae50c99873d8589"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["5336"];
                            };
                            readonly token_name: {
                                readonly type: "string";
                                readonly examples: readonly ["Bored Ape #1000"];
                            };
                            readonly token_description: {
                                readonly type: "string";
                                readonly examples: readonly ["The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs"];
                            };
                            readonly uri: {
                                readonly type: "string";
                                readonly examples: readonly ["ipfs://QmPF8ENi9oJAMDVe9TnseemayfH6ivNeycLDzJrbk5anXD/5336"];
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly metadata_updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2023-01-25T19:22:03.000Z"];
                            };
                            readonly rarity_rank: {
                                readonly type: "integer";
                                readonly format: "int256";
                                readonly examples: readonly [17];
                            };
                            readonly rarity_score: {
                                readonly type: "number";
                                readonly format: "float";
                                readonly examples: readonly [1.1561093];
                                readonly minimum: -3.402823669209385e+38;
                                readonly maximum: 3.402823669209385e+38;
                            };
                            readonly total_transfers: {
                                readonly type: "integer";
                                readonly format: "int256";
                                readonly examples: readonly [27];
                            };
                            readonly minted_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2022-04-25T19:22:03.000Z"];
                            };
                            readonly total_current_owners: {
                                readonly type: "integer";
                                readonly format: "int256";
                                readonly examples: readonly [1];
                            };
                            readonly current_owners: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly address: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0x41f56b000fffe17943fb4c182c123767af71d005"];
                                        };
                                        readonly quantity: {
                                            readonly type: "string";
                                            readonly examples: readonly ["1"];
                                        };
                                    };
                                };
                            };
                            readonly recent_price: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly contract_address: {
                                        readonly type: "string";
                                        readonly examples: readonly ["0x1b780fc912e96e7d9557080530786b927fe8706f"];
                                    };
                                    readonly id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["1"];
                                    };
                                    readonly hash: {
                                        readonly type: "string";
                                        readonly examples: readonly ["0x6fe40e0a78cafa2b93be8ea47b36cb97c23efb5019b34acdd22857421382675e"];
                                    };
                                    readonly hash_nft_count: {
                                        readonly type: "string";
                                        readonly examples: readonly ["1"];
                                    };
                                    readonly from_address: {
                                        readonly type: "string";
                                        readonly examples: readonly ["0x4b461c5496dd7cc23343a0d69a83d40418d15a6e"];
                                    };
                                    readonly to_address: {
                                        readonly type: "string";
                                        readonly examples: readonly ["0x56d451c0a75b545fa69c0cf2d5d086bbdf56ab28"];
                                    };
                                    readonly date: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                        readonly examples: readonly ["2022-09-13T17:07:57.000Z"];
                                    };
                                    readonly quantity: {
                                        readonly type: "string";
                                        readonly examples: readonly ["2"];
                                    };
                                    readonly price: {
                                        readonly type: "string";
                                        readonly examples: readonly ["0.02"];
                                    };
                                    readonly price_currency: {
                                        readonly type: "string";
                                        readonly examples: readonly ["ETH"];
                                    };
                                    readonly price_usd: {
                                        readonly type: "string";
                                        readonly examples: readonly ["34.04356220757607"];
                                    };
                                    readonly price_native: {
                                        readonly type: "string";
                                        readonly examples: readonly ["0.02"];
                                    };
                                    readonly currency: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly symbol: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["ETH"];
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["ETH (NATIVE)"];
                                                };
                                                readonly decimals: {
                                                    readonly type: "integer";
                                                    readonly format: "int32";
                                                    readonly examples: readonly [18];
                                                    readonly minimum: -2147483648;
                                                    readonly maximum: 2147483647;
                                                };
                                                readonly contract_address: {
                                                    readonly type: "string";
                                                };
                                                readonly from_address: {
                                                    readonly type: "string";
                                                };
                                                readonly to_address: {
                                                    readonly type: "string";
                                                };
                                                readonly price: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["20000000000000000"];
                                                };
                                            };
                                        };
                                    };
                                    readonly er20_transfers: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly symbol: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["ETH"];
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["Wrapped ETH"];
                                                };
                                                readonly decimals: {
                                                    readonly type: "integer";
                                                    readonly format: "int32";
                                                    readonly examples: readonly [18];
                                                    readonly minimum: -2147483648;
                                                    readonly maximum: 2147483647;
                                                };
                                                readonly contract_address: {
                                                    readonly type: "string";
                                                };
                                                readonly from_address: {
                                                    readonly type: "string";
                                                };
                                                readonly to_address: {
                                                    readonly type: "string";
                                                };
                                                readonly price: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["1000000000000000"];
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            readonly cached_videos: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly original: {
                                        readonly type: "string";
                                        readonly examples: readonly ["https://cdn.blockspan.com/....bb6df098cd8bc6127.mp4"];
                                    };
                                    readonly content_type: {
                                        readonly type: "string";
                                        readonly examples: readonly ["video/mp4"];
                                    };
                                };
                            };
                            readonly cached_images: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly tiny_100_100: {
                                        readonly type: "string";
                                        readonly examples: readonly ["https://cdn.blockspan.com/....bb6df098cd8bc6127_100_100.jpg"];
                                    };
                                    readonly small_250_250: {
                                        readonly type: "string";
                                        readonly examples: readonly ["https://cdn.blockspan.com/....bb6df098cd8bc6127_250_250.jpg"];
                                    };
                                    readonly medium_500_500: {
                                        readonly type: "string";
                                        readonly examples: readonly ["https://cdn.blockspan.com/....bb6df098cd8bc6127_500_500.jpg"];
                                    };
                                    readonly large_1000_1000: {
                                        readonly type: "string";
                                        readonly examples: readonly ["https://cdn.blockspan.com/....bb6df098cd8bc6127_1000_1000.jpg"];
                                    };
                                    readonly original: {
                                        readonly type: "string";
                                        readonly examples: readonly ["https://cdn.blockspan.com/....bb6df098cd8bc6127.jpg"];
                                    };
                                    readonly content_type: {
                                        readonly type: "string";
                                        readonly examples: readonly ["image/jpg"];
                                    };
                                };
                            };
                            readonly cached_other_assets: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly original: {
                                            readonly type: "string";
                                            readonly examples: readonly ["https://cdn.blockspan.com/....690729fbfa7ae.mov"];
                                        };
                                        readonly content_type: {
                                            readonly type: "string";
                                            readonly examples: readonly ["video/quicktime"];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAllTransfers: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["eth-main", "arbitrum-main", "optimism-main", "poly-main", "bsc-main", "eth-goerli", "eth-sepolia"];
                    readonly default: "eth-main";
                    readonly examples: readonly ["eth-main"];
                    readonly description: "Blockchain from which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly transfer_type: {
                    readonly type: "string";
                    readonly enum: readonly ["mint", "burn", "transfer"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The transfer type for which to return results.";
                };
                readonly token_type: {
                    readonly type: "string";
                    readonly enum: readonly ["erc721", "erc1155"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The token type for which to return results.";
                };
                readonly block_start: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 1;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Starting block number for which to return results.";
                };
                readonly block_end: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Ending block number for which to return results.";
                };
                readonly hash: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The transaction hash for which to return results.";
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Pass the cursor value from previous response to fetch next set of results.";
                };
                readonly page_size: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly default: 25;
                    readonly examples: readonly [25];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results per page.";
                };
            };
            readonly required: readonly ["chain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly examples: readonly ["eth-main"];
                };
                readonly total: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [200];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly examples: readonly ["KGpzb24pIjB4NDFmNTZiMDAwZmZmZTE3OTQzZmI0YzE4MmMxMjM3NjdhZjcxZDAwNSI"];
                };
                readonly per_page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [25];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly token_type: {
                                readonly type: "string";
                                readonly examples: readonly ["erc721"];
                            };
                            readonly contract_address: {
                                readonly type: "string";
                                readonly examples: readonly ["0x2f329de74f67e2c1c5d2a6487ae50c99873d8589"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly [5336];
                            };
                            readonly operator: {
                                readonly type: "string";
                                readonly examples: readonly ["0x20904982fa86601c46e7e489dbcea1ffe6f46287"];
                            };
                            readonly from_address: {
                                readonly type: "string";
                                readonly examples: readonly ["0x20904982fa86601c46e7e489dbcea1ffe6f46287"];
                            };
                            readonly to_address: {
                                readonly type: "string";
                                readonly examples: readonly ["0x0000000000000000000000000000000000000000"];
                            };
                            readonly transfer_type: {
                                readonly type: "string";
                                readonly examples: readonly ["burn"];
                            };
                            readonly block_timestamp: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2022-04-25T19:22:03.000Z"];
                            };
                            readonly block_number: {
                                readonly type: "string";
                                readonly examples: readonly ["14057345"];
                            };
                            readonly log_index: {
                                readonly type: "integer";
                                readonly examples: readonly [22];
                            };
                            readonly transaction_hash: {
                                readonly type: "string";
                                readonly examples: readonly ["0x042b460b41c08777ef9f3f79adb50465ae15d0119ae34623f9f201fa18dfef1a"];
                            };
                            readonly batch_index: {
                                readonly type: "integer";
                                readonly format: "uint256";
                                readonly examples: readonly [5336];
                            };
                            readonly quantity: {
                                readonly type: "string";
                                readonly examples: readonly ["1"];
                            };
                            readonly price: {
                                readonly type: "array";
                                readonly items: {
                                    readonly properties: {
                                        readonly contract_address: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0x1b780fc912e96e7d9557080530786b927fe8706f"];
                                        };
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["1"];
                                        };
                                        readonly hash: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0x6fe40e0a78cafa2b93be8ea47b36cb97c23efb5019b34acdd22857421382675e"];
                                        };
                                        readonly hash_nft_count: {
                                            readonly type: "string";
                                            readonly examples: readonly ["1"];
                                        };
                                        readonly from_address: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0x4b461c5496dd7cc23343a0d69a83d40418d15a6e"];
                                        };
                                        readonly to_address: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0x56d451c0a75b545fa69c0cf2d5d086bbdf56ab28"];
                                        };
                                        readonly date: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                            readonly examples: readonly ["2022-09-13T17:07:57.000Z"];
                                        };
                                        readonly quantity: {
                                            readonly type: "string";
                                            readonly examples: readonly ["2"];
                                        };
                                        readonly price: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0.02"];
                                        };
                                        readonly price_currency: {
                                            readonly type: "string";
                                            readonly examples: readonly ["ETH"];
                                        };
                                        readonly price_usd: {
                                            readonly type: "string";
                                            readonly examples: readonly ["34.04356220757607"];
                                        };
                                        readonly price_native: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0.02"];
                                        };
                                        readonly currency: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly symbol: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["ETH"];
                                                    };
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["ETH (NATIVE)"];
                                                    };
                                                    readonly decimals: {
                                                        readonly type: "integer";
                                                        readonly format: "int32";
                                                        readonly examples: readonly [18];
                                                        readonly minimum: -2147483648;
                                                        readonly maximum: 2147483647;
                                                    };
                                                    readonly contract_address: {
                                                        readonly type: "string";
                                                    };
                                                    readonly from_address: {
                                                        readonly type: "string";
                                                    };
                                                    readonly to_address: {
                                                        readonly type: "string";
                                                    };
                                                    readonly price: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["20000000000000000"];
                                                    };
                                                };
                                            };
                                        };
                                        readonly er20_transfers: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly symbol: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["ETH"];
                                                    };
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["Wrapped ETH"];
                                                    };
                                                    readonly decimals: {
                                                        readonly type: "integer";
                                                        readonly format: "int32";
                                                        readonly examples: readonly [18];
                                                        readonly minimum: -2147483648;
                                                        readonly maximum: 2147483647;
                                                    };
                                                    readonly contract_address: {
                                                        readonly type: "string";
                                                    };
                                                    readonly from_address: {
                                                        readonly type: "string";
                                                    };
                                                    readonly to_address: {
                                                        readonly type: "string";
                                                    };
                                                    readonly price: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["1000000000000000"];
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    readonly type: "object";
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCollection: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contract_address: {
                    readonly type: "string";
                    readonly default: "0x192762e76ac5df44e3807c92ec8911cc13111eae";
                    readonly examples: readonly ["0x192762e76ac5df44e3807c92ec8911cc13111eae"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The address of the contract.";
                };
            };
            readonly required: readonly ["contract_address"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["eth-main", "arbitrum-main", "optimism-main", "poly-main", "bsc-main", "eth-goerli", "eth-sepolia"];
                    readonly default: "eth-main";
                    readonly examples: readonly ["eth-main"];
                    readonly description: "Blockchain from which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["chain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly token_type: {
                    readonly type: "string";
                    readonly examples: readonly ["erc721"];
                };
                readonly contract_address: {
                    readonly type: "string";
                    readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Bored Ape Yacht Club"];
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly examples: readonly ["BAYC"];
                };
                readonly is_potential_spam: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2022-04-25T19:22:03.000Z"];
                };
                readonly total_tokens: {
                    readonly type: "string";
                    readonly examples: readonly ["10000"];
                };
                readonly total_transfers: {
                    readonly type: "string";
                    readonly examples: readonly ["3457"];
                };
                readonly exchange_data: {
                    readonly type: "array";
                    readonly items: {
                        readonly properties: {
                            readonly exchange: {
                                readonly type: "string";
                                readonly examples: readonly ["opensea"];
                            };
                            readonly update_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2022-10-05T20:31:26.621Z"];
                            };
                            readonly key: {
                                readonly type: "string";
                                readonly examples: readonly ["boredapeyachtclub"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Bored Ape Yacht Club"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly examples: readonly ["The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles ..."];
                            };
                            readonly exchange_url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://opensea.io/collection/boredapeyachtclub"];
                            };
                            readonly external_url: {
                                readonly type: "string";
                                readonly examples: readonly ["http://www.boredapeyachtclub.com/"];
                            };
                            readonly banner_image_url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://i.seadn.io/gae/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs?w=500&auto=format"];
                            };
                            readonly featured_image_url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://i.seadn.io/gae/RBX3jwgykdaQO3rjTcKNf5OVwdukKO46oOAV3zZeiaMb8VER6cKxPDTdGZQdfWcDou75A8KtVZWM_fEnHG4d4q6Um8MeZIlw79BpWPA?w=500&auto=format"];
                            };
                            readonly large_image_url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://i.seadn.io/gae/RBX3jwgykdaQO3rjTcKNf5OVwdukKO46oOAV3zZeiaMb8VER6cKxPDTdGZQdfWcDou75A8KtVZWM_fEnHG4d4q6Um8MeZIlw79BpWPA?w=500&auto=format"];
                            };
                            readonly image_url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?w=500&auto=format"];
                            };
                            readonly chat_url: {
                                readonly type: "string";
                            };
                            readonly discord_url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://discord.gg/3P5K3dzgdB"];
                            };
                            readonly telegram_url: {
                                readonly type: "string";
                            };
                            readonly twitter_username: {
                                readonly type: "string";
                                readonly examples: readonly ["BoredApeYC"];
                            };
                            readonly wiki_url: {
                                readonly type: "string";
                            };
                            readonly instagram_username: {
                                readonly type: "string";
                            };
                            readonly stats: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly market_cap: {
                                        readonly type: "number";
                                        readonly examples: readonly [1362173.6646153848];
                                    };
                                    readonly num_owners: {
                                        readonly type: "number";
                                        readonly examples: readonly [6427];
                                    };
                                    readonly floor_price: {
                                        readonly type: "number";
                                        readonly examples: readonly [0];
                                    };
                                    readonly floor_price_symbol: {
                                        readonly type: "string";
                                        readonly examples: readonly ["ETH"];
                                    };
                                    readonly total_minted: {
                                        readonly type: "number";
                                        readonly examples: readonly [9998];
                                    };
                                    readonly total_supply: {
                                        readonly type: "number";
                                        readonly examples: readonly [9998];
                                    };
                                    readonly total_volume: {
                                        readonly type: "number";
                                        readonly examples: readonly [670210.9884434949];
                                    };
                                    readonly one_day_volume: {
                                        readonly type: "number";
                                        readonly examples: readonly [173.2];
                                    };
                                    readonly seven_day_volume: {
                                        readonly type: "number";
                                        readonly examples: readonly [1771.18];
                                    };
                                    readonly thirty_day_volume: {
                                        readonly type: "number";
                                        readonly examples: readonly [10528.511809999996];
                                    };
                                    readonly one_day_volume_change: {
                                        readonly type: "number";
                                        readonly examples: readonly [-196.76640100000003];
                                    };
                                    readonly seven_day_volume_change: {
                                        readonly type: "number";
                                        readonly examples: readonly [368.9941680000006];
                                    };
                                    readonly thirty_day_volume_change: {
                                        readonly type: "number";
                                        readonly examples: readonly [211.18794129058824];
                                    };
                                    readonly total_sales: {
                                        readonly type: "number";
                                        readonly examples: readonly [27150];
                                    };
                                    readonly one_day_sales: {
                                        readonly type: "number";
                                        readonly examples: readonly [2];
                                    };
                                    readonly seven_day_sales: {
                                        readonly type: "number";
                                        readonly examples: readonly [13];
                                    };
                                    readonly thirty_day_sales: {
                                        readonly type: "number";
                                        readonly examples: readonly [115];
                                    };
                                    readonly total_average_price: {
                                        readonly type: "number";
                                        readonly examples: readonly [24.685487603811968];
                                    };
                                    readonly one_day_average_price: {
                                        readonly type: "number";
                                        readonly examples: readonly [86.6];
                                    };
                                    readonly seven_day_average_price: {
                                        readonly type: "number";
                                        readonly examples: readonly [136.2446153846154];
                                    };
                                    readonly thirty_day_average_price: {
                                        readonly type: "number";
                                        readonly examples: readonly [91.55227660869562];
                                    };
                                };
                            };
                            readonly contracts: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly contract_address: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                                        };
                                    };
                                };
                            };
                        };
                        readonly type: "object";
                    };
                };
                readonly trait_rarity_counts: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly trait: {
                                readonly type: "string";
                                readonly examples: readonly ["Background"];
                            };
                            readonly rarity_counts: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly value: {
                                            readonly type: "string";
                                            readonly examples: readonly ["White"];
                                        };
                                        readonly count: {
                                            readonly type: "number";
                                            readonly examples: readonly [7];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly functions: {
                    readonly type: "string";
                    readonly examples: readonly ["[mintTo(address), safeTransferFrom(address,address,uint256,bytes)..."];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCollectionPriceHistory: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contract_address: {
                    readonly type: "string";
                    readonly default: "0x192762e76ac5df44e3807c92ec8911cc13111eae";
                    readonly examples: readonly ["0x192762e76ac5df44e3807c92ec8911cc13111eae"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The address of the contract.";
                };
            };
            readonly required: readonly ["contract_address"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["eth-main", "arbitrum-main", "optimism-main", "poly-main", "bsc-main", "eth-goerli", "eth-sepolia"];
                    readonly default: "eth-main";
                    readonly examples: readonly ["eth-main"];
                    readonly description: "Blockchain from which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly timeframe: {
                    readonly type: "string";
                    readonly enum: readonly ["1_DAY", "7_DAYS", "30_DAYS"];
                    readonly default: "30_DAYS";
                    readonly description: "The timeframe for the price history data. Valid values are 1_DAY, 7_DAYS, and 30_DAYS. This parameter determines the valid binSize values: - 1_DAY: 15_MIN or 1_HOUR - 7_DAYS: 1_HOUR or 1_DAY - 30_DAYS: 1_DAY\n";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly bin_size: {
                    readonly type: "string";
                    readonly enum: readonly ["15_MIN", "1_HOUR", "1_DAY"];
                    readonly default: "1_DAY";
                    readonly description: "The bin size for aggregating price data, depends on the selected timeframe: - 1_DAY: 15_MIN or 1_HOUR - 7_DAYS: 1_HOUR or 1_DAY - 30_DAYS: 1_DAY\n";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly timestamp_end: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2023-01-10T00:00:00Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Ending timestamp for which to return results.";
                };
            };
            readonly required: readonly ["chain", "timeframe", "bin_size"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly examples: readonly ["eth-main"];
                };
                readonly contract_address: {
                    readonly type: "string";
                    readonly examples: readonly ["0x1c3423c0ca4140bddbfe96092c9b9da3ec4af339"];
                };
                readonly total_sales_volume_usd: {
                    readonly type: "string";
                    readonly examples: readonly ["17.9395658132981655"];
                };
                readonly total_sales: {
                    readonly type: "integer";
                    readonly examples: readonly [1];
                };
                readonly min_price_usd: {
                    readonly type: "string";
                    readonly examples: readonly ["17.9395658132981655"];
                };
                readonly max_price_usd: {
                    readonly type: "string";
                    readonly examples: readonly ["17.9395658132981655"];
                };
                readonly avg_price_usd: {
                    readonly type: "string";
                    readonly examples: readonly ["17.9395658132981655"];
                };
                readonly price_history: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly timestamp: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2023-01-02T00:00:00Z"];
                            };
                            readonly total_transfers: {
                                readonly type: "integer";
                                readonly examples: readonly [2];
                            };
                            readonly available_prices: {
                                readonly type: "integer";
                                readonly examples: readonly [1];
                            };
                            readonly min_price_usd: {
                                readonly type: "string";
                                readonly examples: readonly ["17.939565813298167"];
                            };
                            readonly max_price_usd: {
                                readonly type: "string";
                                readonly examples: readonly ["17.939565813298167"];
                            };
                            readonly avg_price_usd: {
                                readonly type: "string";
                                readonly examples: readonly ["17.939565813298167"];
                            };
                            readonly min_price_native: {
                                readonly type: "string";
                                readonly examples: readonly ["0.015"];
                            };
                            readonly max_price_native: {
                                readonly type: "string";
                                readonly examples: readonly ["0.015"];
                            };
                            readonly avg_price_native: {
                                readonly type: "string";
                                readonly examples: readonly ["0.015"];
                            };
                            readonly median_price_usd: {
                                readonly type: "string";
                                readonly examples: readonly ["17.939565813298167"];
                            };
                            readonly median_price_native: {
                                readonly type: "string";
                                readonly examples: readonly ["0.015"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCollectionPriceSummary: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contract_address: {
                    readonly type: "string";
                    readonly default: "0x192762e76ac5df44e3807c92ec8911cc13111eae";
                    readonly examples: readonly ["0x192762e76ac5df44e3807c92ec8911cc13111eae"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The address of the contract.";
                };
            };
            readonly required: readonly ["contract_address"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["eth-main", "arbitrum-main", "optimism-main", "poly-main", "bsc-main", "eth-goerli", "eth-sepolia"];
                    readonly default: "eth-main";
                    readonly examples: readonly ["eth-main"];
                    readonly description: "Blockchain from which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly timestamp_end: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2023-01-10T00:00:00Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Ending timestamp for which to return results.";
                };
            };
            readonly required: readonly ["chain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly examples: readonly ["eth-main"];
                };
                readonly contract_address: {
                    readonly type: "string";
                    readonly examples: readonly ["0x2f329de74f67e2c1c5d2a6487ae50c99873d8589"];
                };
                readonly price_summary: {
                    readonly type: "object";
                    readonly properties: {
                        readonly one_day: {
                            readonly type: "object";
                            readonly properties: {
                                readonly total_transfers: {
                                    readonly type: "integer";
                                    readonly examples: readonly [0];
                                };
                                readonly available_prices: {
                                    readonly type: "integer";
                                    readonly examples: readonly [0];
                                };
                                readonly min_price_usd: {
                                    readonly type: "string";
                                };
                                readonly max_price_usd: {
                                    readonly type: "string";
                                };
                                readonly avg_price_usd: {
                                    readonly type: "string";
                                };
                                readonly min_price_native: {
                                    readonly type: "string";
                                };
                                readonly max_price_native: {
                                    readonly type: "string";
                                };
                                readonly avg_price_native: {
                                    readonly type: "string";
                                };
                                readonly median_price_usd: {
                                    readonly type: "string";
                                };
                                readonly median_price_native: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly seven_day: {
                            readonly type: "object";
                            readonly properties: {
                                readonly total_transfers: {
                                    readonly type: "integer";
                                    readonly examples: readonly [10];
                                };
                                readonly available_prices: {
                                    readonly type: "integer";
                                    readonly examples: readonly [7];
                                };
                                readonly min_price_usd: {
                                    readonly type: "string";
                                    readonly examples: readonly [114.2376301524721];
                                };
                                readonly max_price_usd: {
                                    readonly type: "string";
                                    readonly examples: readonly [269.3594243933129];
                                };
                                readonly avg_price_usd: {
                                    readonly type: "string";
                                    readonly examples: readonly [162.20709615576348];
                                };
                                readonly min_price_native: {
                                    readonly type: "string";
                                    readonly examples: readonly [0.079886455];
                                };
                                readonly max_price_native: {
                                    readonly type: "string";
                                    readonly examples: readonly [0.188363234];
                                };
                                readonly avg_price_native: {
                                    readonly type: "string";
                                    readonly examples: readonly [0.113431536];
                                };
                                readonly median_price_usd: {
                                    readonly type: "string";
                                    readonly examples: readonly [202.30486754321834];
                                };
                                readonly median_price_native: {
                                    readonly type: "string";
                                    readonly examples: readonly [0.141471935];
                                };
                            };
                        };
                        readonly thirty_day: {
                            readonly type: "object";
                            readonly properties: {
                                readonly total_transfers: {
                                    readonly type: "integer";
                                    readonly examples: readonly [25];
                                };
                                readonly available_prices: {
                                    readonly type: "integer";
                                    readonly examples: readonly [0];
                                };
                                readonly min_price_usd: {
                                    readonly type: "string";
                                    readonly examples: readonly [114.2376301524721];
                                };
                                readonly max_price_usd: {
                                    readonly type: "string";
                                    readonly examples: readonly [269.3594243933129];
                                };
                                readonly avg_price_usd: {
                                    readonly type: "string";
                                    readonly examples: readonly [162.20709615576348];
                                };
                                readonly min_price_native: {
                                    readonly type: "string";
                                    readonly examples: readonly [0.079886455];
                                };
                                readonly max_price_native: {
                                    readonly type: "string";
                                    readonly examples: readonly [0.188363234];
                                };
                                readonly avg_price_native: {
                                    readonly type: "string";
                                    readonly examples: readonly [0.113431536];
                                };
                                readonly median_price_usd: {
                                    readonly type: "string";
                                    readonly examples: readonly [202.30486754321834];
                                };
                                readonly median_price_native: {
                                    readonly type: "string";
                                    readonly examples: readonly [0.141471935];
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCollectionsByOwner: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly owner_address: {
                    readonly type: "string";
                    readonly default: "0xf68c793cff2071698dcc52027bd175a12236fb7d";
                    readonly examples: readonly ["0xf68c793cff2071698dcc52027bd175a12236fb7d"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The wallet address of the NFT owner.";
                };
            };
            readonly required: readonly ["owner_address"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["eth-main", "arbitrum-main", "optimism-main", "poly-main", "bsc-main", "eth-goerli", "eth-sepolia"];
                    readonly default: "eth-main";
                    readonly examples: readonly ["eth-main"];
                    readonly description: "Blockchain from which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly token_type: {
                    readonly type: "string";
                    readonly enum: readonly ["erc721", "erc1155"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The token type for which to return results.";
                };
                readonly order: {
                    readonly type: "string";
                    readonly enum: readonly ["asc", "desc"];
                    readonly examples: readonly ["asc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort results in ascending or descending order";
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Pass the cursor value from previous response to fetch next set of results.";
                };
                readonly page_size: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly default: 25;
                    readonly examples: readonly [25];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results per page.";
                };
            };
            readonly required: readonly ["chain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly examples: readonly ["eth-main"];
                };
                readonly owner_address: {
                    readonly type: "string";
                    readonly examples: readonly ["0x85e3351504c61a3491c6619bce130b6fe02f148d"];
                };
                readonly total_collections: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [200];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly examples: readonly ["KGpzb24pIjB4NDFmNTZiMDAwZmZmZTE3OTQzZmI0YzE4MmMxMjM3NjdhZjcxZDAwNSI"];
                };
                readonly per_page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [25];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly token_type: {
                                readonly type: "string";
                                readonly examples: readonly ["erc721"];
                            };
                            readonly contract_address: {
                                readonly type: "string";
                                readonly examples: readonly ["0x2f329de74f67e2c1c5d2a6487ae50c99873d8589"];
                            };
                            readonly total_tokens: {
                                readonly type: "integer";
                                readonly examples: readonly [4];
                            };
                            readonly total_quantity: {
                                readonly type: "string";
                                readonly examples: readonly ["4"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetEnsNamesOfAddresses: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly addresses: {
                    readonly type: "string";
                    readonly default: "0x81b287c0992b110adeb5903bf7e2d9350c80581a,0x81b287c0992b110adeb5903bf7e2d9350c80581a";
                    readonly examples: readonly ["0x81b287c0992b110adeb5903bf7e2d9350c80581a,0x81b287c0992b110adeb5903bf7e2d9350c80581a"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Comma-separated list of addresses, up to 25 addresses in length";
                };
            };
            readonly required: readonly ["addresses"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
                readonly examples: readonly ["coinbase.eth"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetExchangeCollection: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly key: {
                    readonly type: "string";
                    readonly default: "boredapeyachtclub";
                    readonly examples: readonly ["boredapeyachtclub"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The marketplace exchange key.";
                };
            };
            readonly required: readonly ["key"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["eth-main", "arbitrum-main", "optimism-main", "poly-main", "bsc-main", "eth-goerli", "eth-sepolia"];
                    readonly default: "eth-main";
                    readonly examples: readonly ["eth-main"];
                    readonly description: "Blockchain from which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly exchange: {
                    readonly type: "string";
                    readonly enum: readonly ["opensea", "looksrare"];
                    readonly default: "opensea";
                    readonly description: "The marketplace exchange for which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["chain", "exchange"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly exchange: {
                    readonly type: "string";
                    readonly examples: readonly ["opensea"];
                };
                readonly update_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2022-10-05T20:31:26.621Z"];
                };
                readonly key: {
                    readonly type: "string";
                    readonly examples: readonly ["boredapeyachtclub"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Bored Ape Yacht Club"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly examples: readonly ["The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles ..."];
                };
                readonly exchange_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://opensea.io/collection/boredapeyachtclub"];
                };
                readonly external_url: {
                    readonly type: "string";
                    readonly examples: readonly ["http://www.boredapeyachtclub.com/"];
                };
                readonly banner_image_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://i.seadn.io/gae/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs?w=500&auto=format"];
                };
                readonly featured_image_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://i.seadn.io/gae/RBX3jwgykdaQO3rjTcKNf5OVwdukKO46oOAV3zZeiaMb8VER6cKxPDTdGZQdfWcDou75A8KtVZWM_fEnHG4d4q6Um8MeZIlw79BpWPA?w=500&auto=format"];
                };
                readonly large_image_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://i.seadn.io/gae/RBX3jwgykdaQO3rjTcKNf5OVwdukKO46oOAV3zZeiaMb8VER6cKxPDTdGZQdfWcDou75A8KtVZWM_fEnHG4d4q6Um8MeZIlw79BpWPA?w=500&auto=format"];
                };
                readonly image_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?w=500&auto=format"];
                };
                readonly chat_url: {
                    readonly type: "string";
                };
                readonly discord_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://discord.gg/3P5K3dzgdB"];
                };
                readonly telegram_url: {
                    readonly type: "string";
                };
                readonly twitter_username: {
                    readonly type: "string";
                    readonly examples: readonly ["BoredApeYC"];
                };
                readonly wiki_url: {
                    readonly type: "string";
                };
                readonly instagram_username: {
                    readonly type: "string";
                };
                readonly stats: {
                    readonly type: "object";
                    readonly properties: {
                        readonly market_cap: {
                            readonly type: "number";
                            readonly examples: readonly [1362173.6646153848];
                        };
                        readonly num_owners: {
                            readonly type: "number";
                            readonly examples: readonly [6427];
                        };
                        readonly floor_price: {
                            readonly type: "number";
                            readonly examples: readonly [0];
                        };
                        readonly floor_price_symbol: {
                            readonly type: "string";
                            readonly examples: readonly ["ETH"];
                        };
                        readonly total_minted: {
                            readonly type: "number";
                            readonly examples: readonly [9998];
                        };
                        readonly total_supply: {
                            readonly type: "number";
                            readonly examples: readonly [9998];
                        };
                        readonly total_volume: {
                            readonly type: "number";
                            readonly examples: readonly [670210.9884434949];
                        };
                        readonly one_day_volume: {
                            readonly type: "number";
                            readonly examples: readonly [173.2];
                        };
                        readonly seven_day_volume: {
                            readonly type: "number";
                            readonly examples: readonly [1771.18];
                        };
                        readonly thirty_day_volume: {
                            readonly type: "number";
                            readonly examples: readonly [10528.511809999996];
                        };
                        readonly one_day_volume_change: {
                            readonly type: "number";
                            readonly examples: readonly [-196.76640100000003];
                        };
                        readonly seven_day_volume_change: {
                            readonly type: "number";
                            readonly examples: readonly [368.9941680000006];
                        };
                        readonly thirty_day_volume_change: {
                            readonly type: "number";
                            readonly examples: readonly [211.18794129058824];
                        };
                        readonly total_sales: {
                            readonly type: "number";
                            readonly examples: readonly [27150];
                        };
                        readonly one_day_sales: {
                            readonly type: "number";
                            readonly examples: readonly [2];
                        };
                        readonly seven_day_sales: {
                            readonly type: "number";
                            readonly examples: readonly [13];
                        };
                        readonly thirty_day_sales: {
                            readonly type: "number";
                            readonly examples: readonly [115];
                        };
                        readonly total_average_price: {
                            readonly type: "number";
                            readonly examples: readonly [24.685487603811968];
                        };
                        readonly one_day_average_price: {
                            readonly type: "number";
                            readonly examples: readonly [86.6];
                        };
                        readonly seven_day_average_price: {
                            readonly type: "number";
                            readonly examples: readonly [136.2446153846154];
                        };
                        readonly thirty_day_average_price: {
                            readonly type: "number";
                            readonly examples: readonly [91.55227660869562];
                        };
                    };
                };
                readonly contracts: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly contract_address: {
                                readonly type: "string";
                                readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                            };
                        };
                    };
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetExchangeCollectionsRanking: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["eth-main", "arbitrum-main", "optimism-main", "poly-main", "bsc-main", "eth-goerli", "eth-sepolia"];
                    readonly default: "eth-main";
                    readonly examples: readonly ["eth-main"];
                    readonly description: "Blockchain from which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly exchange: {
                    readonly type: "string";
                    readonly enum: readonly ["opensea", "looksrare"];
                    readonly default: "opensea";
                    readonly description: "The marketplace exchange for which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly ranking: {
                    readonly type: "string";
                    readonly enum: readonly ["total_volume", "one_day_volume", "seven_day_volume", "thirty_day_volume", "total_sales", "one_day_sales", "seven_day_sales", "thirty_day_sales", "total_average_price", "one_day_average_price", "seven_day_average_price", "thirty_day_average_price"];
                    readonly default: "total_volume";
                    readonly description: "The ranking metric for which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Pass the cursor value from previous response to fetch next set of results.";
                };
                readonly page_size: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly default: 25;
                    readonly examples: readonly [25];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results per page.";
                };
            };
            readonly required: readonly ["chain", "exchange", "ranking"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly examples: readonly ["eth-main"];
                };
                readonly exchange: {
                    readonly type: "string";
                    readonly examples: readonly ["opensea"];
                };
                readonly ranking: {
                    readonly type: "string";
                    readonly examples: readonly ["total_volume"];
                };
                readonly total: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [200];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly examples: readonly ["KGpzb24pIjB4NDFmNTZiMDAwZmZmZTE3OTQzZmI0YzE4MmMxMjM3NjdhZjcxZDAwNSI"];
                };
                readonly per_page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [25];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly properties: {
                            readonly key: {
                                readonly type: "string";
                                readonly examples: readonly ["boredapeyachtclub"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Bored Ape Yacht Club"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly examples: readonly ["The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs..."];
                            };
                            readonly update_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2022-10-05T18:50:00.582Z"];
                            };
                            readonly total_volume: {
                                readonly type: "string";
                                readonly examples: readonly ["670210.9884434949"];
                            };
                            readonly one_day_volume: {
                                readonly type: "string";
                                readonly examples: readonly ["173.2"];
                            };
                            readonly seven_day_volume: {
                                readonly type: "string";
                                readonly examples: readonly ["1771.18"];
                            };
                            readonly thirty_day_volume: {
                                readonly type: "string";
                                readonly examples: readonly ["10528.511809999996"];
                            };
                            readonly one_day_volume_change: {
                                readonly type: "string";
                                readonly examples: readonly ["13.2"];
                            };
                            readonly seven_day_volume_change: {
                                readonly type: "string";
                                readonly examples: readonly ["171.18"];
                            };
                            readonly thirty_day_volume_change: {
                                readonly type: "string";
                                readonly examples: readonly ["1528.51"];
                            };
                            readonly total_sales: {
                                readonly type: "string";
                                readonly examples: readonly ["27150"];
                            };
                            readonly one_day_sales: {
                                readonly type: "string";
                                readonly examples: readonly ["2"];
                            };
                            readonly seven_day_sales: {
                                readonly type: "string";
                                readonly examples: readonly ["13"];
                            };
                            readonly thirty_day_sales: {
                                readonly type: "string";
                                readonly examples: readonly ["115"];
                            };
                            readonly total_average_price: {
                                readonly type: "string";
                                readonly examples: readonly ["24.685487603811968"];
                            };
                            readonly one_day_average_price: {
                                readonly type: "string";
                                readonly examples: readonly ["86.6"];
                            };
                            readonly seven_day_average_price: {
                                readonly type: "string";
                                readonly examples: readonly ["136.2446153846154"];
                            };
                            readonly thirty_day_average_price: {
                                readonly type: "string";
                                readonly examples: readonly ["91.55227660869562"];
                            };
                            readonly exchange_url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://opensea.io/collection/boredapeyachtclub"];
                            };
                            readonly external_url: {
                                readonly type: "string";
                                readonly examples: readonly ["http://www.boredapeyachtclub.com/"];
                            };
                            readonly banner_image_url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://i.seadn.io/gae/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs?w=500&auto=format"];
                            };
                            readonly featured_image_url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://i.seadn.io/gae/RBX3jwgykdaQO3rjTcKNf5OVwdukKO46oOAV3zZeiaMb8VER6cKxPDTdGZQdfWcDou75A8KtVZWM_fEnHG4d4q6Um8MeZIlw79BpWPA?w=500&auto=format"];
                            };
                            readonly large_image_url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://i.seadn.io/gae/RBX3jwgykdaQO3rjTcKNf5OVwdukKO46oOAV3zZeiaMb8VER6cKxPDTdGZQdfWcDou75A8KtVZWM_fEnHG4d4q6Um8MeZIlw79BpWPA?w=500&auto=format"];
                            };
                            readonly image_url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?w=500&auto=format"];
                            };
                            readonly chat_url: {
                                readonly type: "string";
                            };
                            readonly discord_url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://discord.gg/3P5K3dzgdB"];
                            };
                            readonly telegram_url: {
                                readonly type: "string";
                            };
                            readonly twitter_username: {
                                readonly type: "string";
                                readonly examples: readonly ["BoredApeYC"];
                            };
                            readonly wiki_url: {
                                readonly type: "string";
                            };
                            readonly instagram_username: {
                                readonly type: "string";
                            };
                            readonly contracts: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly contract_address: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"];
                                        };
                                    };
                                };
                            };
                        };
                        readonly type: "object";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNfTsByCollection: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contract_address: {
                    readonly type: "string";
                    readonly default: "0x192762e76ac5df44e3807c92ec8911cc13111eae";
                    readonly examples: readonly ["0x192762e76ac5df44e3807c92ec8911cc13111eae"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The address of the contract.";
                };
            };
            readonly required: readonly ["contract_address"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly token_ids: {
                    readonly type: "string";
                    readonly examples: readonly ["10,1004,1006"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A comma separated list of up to 25 token ids as specified in the contract.";
                };
                readonly trait_filter: {
                    readonly type: "string";
                    readonly examples: readonly ["[{\"trait_type\":\"body\",\"value\":\"Important Dead Cat\"},{\"trait_type\":\"headwear\",\"value\":\"Red Mohawk\"}]"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The trait type and values in JSON format to filter tokens by.";
                };
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["eth-main", "arbitrum-main", "optimism-main", "poly-main", "bsc-main", "eth-goerli", "eth-sepolia"];
                    readonly default: "eth-main";
                    readonly examples: readonly ["eth-main"];
                    readonly description: "Blockchain from which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly rarity_rank_start: {
                    readonly type: "integer";
                    readonly examples: readonly [4];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The minimum rarity rank for tokens";
                };
                readonly rarity_rank_end: {
                    readonly type: "integer";
                    readonly examples: readonly [150];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The maximum rarity rank for tokens";
                };
                readonly order: {
                    readonly type: "string";
                    readonly enum: readonly ["asc", "desc"];
                    readonly examples: readonly ["asc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort results in ascending or descending order";
                };
                readonly include_current_owners: {
                    readonly type: "string";
                    readonly default: "true";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to false to exclude returning current owners, default is true.";
                };
                readonly include_recent_price: {
                    readonly type: "string";
                    readonly default: "true";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to false to exclude returning recent price, default is true.";
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Pass the cursor value from previous response to fetch next set of results.";
                };
                readonly page_size: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly default: 25;
                    readonly examples: readonly [25];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results per page.";
                };
            };
            readonly required: readonly ["chain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly examples: readonly ["eth-main"];
                };
                readonly total: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [200];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly examples: readonly ["KGpzb24pIjB4NDFmNTZiMDAwZmZmZTE3OTQzZmI0YzE4MmMxMjM3NjdhZjcxZDAwNSI"];
                };
                readonly per_page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [25];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly token_type: {
                                readonly type: "string";
                                readonly examples: readonly ["erc721"];
                            };
                            readonly contract_address: {
                                readonly type: "string";
                                readonly examples: readonly ["0x2f329de74f67e2c1c5d2a6487ae50c99873d8589"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["5336"];
                            };
                            readonly token_name: {
                                readonly type: "string";
                                readonly examples: readonly ["Bored Ape #1000"];
                            };
                            readonly token_description: {
                                readonly type: "string";
                                readonly examples: readonly ["The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs"];
                            };
                            readonly uri: {
                                readonly type: "string";
                                readonly examples: readonly ["ipfs://QmPF8ENi9oJAMDVe9TnseemayfH6ivNeycLDzJrbk5anXD/5336"];
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly metadata_updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2023-01-25T19:22:03.000Z"];
                            };
                            readonly rarity_rank: {
                                readonly type: "integer";
                                readonly format: "int256";
                                readonly examples: readonly [17];
                            };
                            readonly rarity_score: {
                                readonly type: "number";
                                readonly format: "float";
                                readonly examples: readonly [1.1561093];
                                readonly minimum: -3.402823669209385e+38;
                                readonly maximum: 3.402823669209385e+38;
                            };
                            readonly total_transfers: {
                                readonly type: "integer";
                                readonly format: "int256";
                                readonly examples: readonly [27];
                            };
                            readonly minted_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2022-04-25T19:22:03.000Z"];
                            };
                            readonly total_current_owners: {
                                readonly type: "integer";
                                readonly format: "int256";
                                readonly examples: readonly [1];
                            };
                            readonly current_owners: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly address: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0x41f56b000fffe17943fb4c182c123767af71d005"];
                                        };
                                        readonly quantity: {
                                            readonly type: "string";
                                            readonly examples: readonly ["1"];
                                        };
                                    };
                                };
                            };
                            readonly recent_price: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly contract_address: {
                                        readonly type: "string";
                                        readonly examples: readonly ["0x1b780fc912e96e7d9557080530786b927fe8706f"];
                                    };
                                    readonly id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["1"];
                                    };
                                    readonly hash: {
                                        readonly type: "string";
                                        readonly examples: readonly ["0x6fe40e0a78cafa2b93be8ea47b36cb97c23efb5019b34acdd22857421382675e"];
                                    };
                                    readonly hash_nft_count: {
                                        readonly type: "string";
                                        readonly examples: readonly ["1"];
                                    };
                                    readonly from_address: {
                                        readonly type: "string";
                                        readonly examples: readonly ["0x4b461c5496dd7cc23343a0d69a83d40418d15a6e"];
                                    };
                                    readonly to_address: {
                                        readonly type: "string";
                                        readonly examples: readonly ["0x56d451c0a75b545fa69c0cf2d5d086bbdf56ab28"];
                                    };
                                    readonly date: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                        readonly examples: readonly ["2022-09-13T17:07:57.000Z"];
                                    };
                                    readonly quantity: {
                                        readonly type: "string";
                                        readonly examples: readonly ["2"];
                                    };
                                    readonly price: {
                                        readonly type: "string";
                                        readonly examples: readonly ["0.02"];
                                    };
                                    readonly price_currency: {
                                        readonly type: "string";
                                        readonly examples: readonly ["ETH"];
                                    };
                                    readonly price_usd: {
                                        readonly type: "string";
                                        readonly examples: readonly ["34.04356220757607"];
                                    };
                                    readonly price_native: {
                                        readonly type: "string";
                                        readonly examples: readonly ["0.02"];
                                    };
                                    readonly currency: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly symbol: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["ETH"];
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["ETH (NATIVE)"];
                                                };
                                                readonly decimals: {
                                                    readonly type: "integer";
                                                    readonly format: "int32";
                                                    readonly examples: readonly [18];
                                                    readonly minimum: -2147483648;
                                                    readonly maximum: 2147483647;
                                                };
                                                readonly contract_address: {
                                                    readonly type: "string";
                                                };
                                                readonly from_address: {
                                                    readonly type: "string";
                                                };
                                                readonly to_address: {
                                                    readonly type: "string";
                                                };
                                                readonly price: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["20000000000000000"];
                                                };
                                            };
                                        };
                                    };
                                    readonly er20_transfers: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly symbol: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["ETH"];
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["Wrapped ETH"];
                                                };
                                                readonly decimals: {
                                                    readonly type: "integer";
                                                    readonly format: "int32";
                                                    readonly examples: readonly [18];
                                                    readonly minimum: -2147483648;
                                                    readonly maximum: 2147483647;
                                                };
                                                readonly contract_address: {
                                                    readonly type: "string";
                                                };
                                                readonly from_address: {
                                                    readonly type: "string";
                                                };
                                                readonly to_address: {
                                                    readonly type: "string";
                                                };
                                                readonly price: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["1000000000000000"];
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            readonly cached_videos: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly original: {
                                        readonly type: "string";
                                        readonly examples: readonly ["https://cdn.blockspan.com/....bb6df098cd8bc6127.mp4"];
                                    };
                                    readonly content_type: {
                                        readonly type: "string";
                                        readonly examples: readonly ["video/mp4"];
                                    };
                                };
                            };
                            readonly cached_images: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly tiny_100_100: {
                                        readonly type: "string";
                                        readonly examples: readonly ["https://cdn.blockspan.com/....bb6df098cd8bc6127_100_100.jpg"];
                                    };
                                    readonly small_250_250: {
                                        readonly type: "string";
                                        readonly examples: readonly ["https://cdn.blockspan.com/....bb6df098cd8bc6127_250_250.jpg"];
                                    };
                                    readonly medium_500_500: {
                                        readonly type: "string";
                                        readonly examples: readonly ["https://cdn.blockspan.com/....bb6df098cd8bc6127_500_500.jpg"];
                                    };
                                    readonly large_1000_1000: {
                                        readonly type: "string";
                                        readonly examples: readonly ["https://cdn.blockspan.com/....bb6df098cd8bc6127_1000_1000.jpg"];
                                    };
                                    readonly original: {
                                        readonly type: "string";
                                        readonly examples: readonly ["https://cdn.blockspan.com/....bb6df098cd8bc6127.jpg"];
                                    };
                                    readonly content_type: {
                                        readonly type: "string";
                                        readonly examples: readonly ["image/jpg"];
                                    };
                                };
                            };
                            readonly cached_other_assets: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly original: {
                                            readonly type: "string";
                                            readonly examples: readonly ["https://cdn.blockspan.com/....690729fbfa7ae.mov"];
                                        };
                                        readonly content_type: {
                                            readonly type: "string";
                                            readonly examples: readonly ["video/quicktime"];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNfTsByOwner: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly owner_address: {
                    readonly type: "string";
                    readonly default: "0xf68c793cff2071698dcc52027bd175a12236fb7d";
                    readonly examples: readonly ["0xf68c793cff2071698dcc52027bd175a12236fb7d"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The wallet address of the NFT owner.";
                };
            };
            readonly required: readonly ["owner_address"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["eth-main", "arbitrum-main", "optimism-main", "poly-main", "bsc-main", "eth-goerli", "eth-sepolia"];
                    readonly default: "eth-main";
                    readonly examples: readonly ["eth-main"];
                    readonly description: "Blockchain from which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly token_type: {
                    readonly type: "string";
                    readonly enum: readonly ["erc721", "erc1155"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The token type for which to return results.";
                };
                readonly contract_addresses: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A comma separated list of up to 25 contract addresses.";
                };
                readonly include_nft_details: {
                    readonly type: "string";
                    readonly default: "false";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to include nft metadata and cached media, default is false.";
                };
                readonly filter: {
                    readonly type: "string";
                    readonly enum: readonly ["all", "nospam"];
                    readonly default: "all";
                    readonly examples: readonly ["all"];
                    readonly description: "Filter out spam NFTs by passing nospam.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Pass the cursor value from previous response to fetch next set of results.";
                };
                readonly page_size: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly default: 25;
                    readonly examples: readonly [25];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results per page.";
                };
            };
            readonly required: readonly ["chain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly examples: readonly ["eth-main"];
                };
                readonly owner_address: {
                    readonly type: "string";
                    readonly examples: readonly ["0x85e3351504c61a3491c6619bce130b6fe02f148d"];
                };
                readonly total: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [200];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly examples: readonly ["KGpzb24pIjB4NDFmNTZiMDAwZmZmZTE3OTQzZmI0YzE4MmMxMjM3NjdhZjcxZDAwNSI"];
                };
                readonly per_page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [25];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly token_type: {
                                readonly type: "string";
                                readonly examples: readonly ["erc721"];
                            };
                            readonly contract_address: {
                                readonly type: "string";
                                readonly examples: readonly ["0x2f329de74f67e2c1c5d2a6487ae50c99873d8589"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["5336"];
                            };
                            readonly owner_address: {
                                readonly type: "string";
                                readonly examples: readonly ["0x85e3351504c61a3491c6619bce130b6fe02f148d"];
                            };
                            readonly times_acquired: {
                                readonly type: "integer";
                                readonly format: "int256";
                                readonly examples: readonly [4];
                            };
                            readonly minted_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2022-03-25T19:22:03.000Z"];
                            };
                            readonly first_owned: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2022-04-25T19:22:03.000Z"];
                            };
                            readonly last_owned: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2022-05-20T12:12:03.000Z"];
                            };
                            readonly quantity: {
                                readonly type: "string";
                                readonly examples: readonly ["1"];
                            };
                            readonly nft_details: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly token_type: {
                                        readonly type: "string";
                                        readonly examples: readonly ["erc721"];
                                    };
                                    readonly contract_address: {
                                        readonly type: "string";
                                        readonly examples: readonly ["0x0827b6c6e9c53f2de4327ad172fceec9987b5c5e"];
                                    };
                                    readonly id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["594"];
                                    };
                                    readonly token_name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Demon Time #594"];
                                    };
                                    readonly token_description: {
                                        readonly type: "string";
                                        readonly examples: readonly ["cc0. Free mint. No Map. On Demon Time. "];
                                    };
                                    readonly uri: {
                                        readonly type: "string";
                                        readonly examples: readonly ["ipfs://QmaS2Xqvqu3gcUMRjguvibVMhEX6wByAPeQcct4vcjEYaK/594.json"];
                                    };
                                    readonly metadata: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly image: {
                                                readonly type: "string";
                                                readonly examples: readonly ["ipfs://QmXWDXUXQpaBhD2wsG64YTSYgfEukBgoLE8LHoqU7kGX8V/594.webp"];
                                            };
                                            readonly attributes: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly value: {
                                                            readonly type: "string";
                                                            readonly examples: readonly ["purple"];
                                                        };
                                                        readonly trait_type: {
                                                            readonly type: "string";
                                                            readonly examples: readonly ["Background"];
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    readonly metadata_updated_at: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                        readonly examples: readonly ["2023-04-30T18:29:27.658Z"];
                                    };
                                    readonly rarity_rank: {
                                        readonly type: "integer";
                                        readonly format: "int256";
                                        readonly examples: readonly [17];
                                    };
                                    readonly rarity_score: {
                                        readonly type: "number";
                                        readonly format: "float";
                                        readonly examples: readonly [1.1561093];
                                        readonly minimum: -3.402823669209385e+38;
                                        readonly maximum: 3.402823669209385e+38;
                                    };
                                    readonly total_transfers: {
                                        readonly type: "integer";
                                        readonly examples: readonly [2];
                                    };
                                    readonly recent_price: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly contract_address: {
                                                readonly type: "string";
                                                readonly examples: readonly ["0x1b780fc912e96e7d9557080530786b927fe8706f"];
                                            };
                                            readonly id: {
                                                readonly type: "string";
                                                readonly examples: readonly ["1"];
                                            };
                                            readonly hash: {
                                                readonly type: "string";
                                                readonly examples: readonly ["0x6fe40e0a78cafa2b93be8ea47b36cb97c23efb5019b34acdd22857421382675e"];
                                            };
                                            readonly hash_nft_count: {
                                                readonly type: "string";
                                                readonly examples: readonly ["1"];
                                            };
                                            readonly from_address: {
                                                readonly type: "string";
                                                readonly examples: readonly ["0x4b461c5496dd7cc23343a0d69a83d40418d15a6e"];
                                            };
                                            readonly to_address: {
                                                readonly type: "string";
                                                readonly examples: readonly ["0x56d451c0a75b545fa69c0cf2d5d086bbdf56ab28"];
                                            };
                                            readonly date: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                                readonly examples: readonly ["2022-09-13T17:07:57.000Z"];
                                            };
                                            readonly quantity: {
                                                readonly type: "string";
                                                readonly examples: readonly ["2"];
                                            };
                                            readonly price: {
                                                readonly type: "string";
                                                readonly examples: readonly ["0.02"];
                                            };
                                            readonly price_currency: {
                                                readonly type: "string";
                                                readonly examples: readonly ["ETH"];
                                            };
                                            readonly price_usd: {
                                                readonly type: "string";
                                                readonly examples: readonly ["34.04356220757607"];
                                            };
                                            readonly price_native: {
                                                readonly type: "string";
                                                readonly examples: readonly ["0.02"];
                                            };
                                            readonly currency: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly symbol: {
                                                            readonly type: "string";
                                                            readonly examples: readonly ["ETH"];
                                                        };
                                                        readonly name: {
                                                            readonly type: "string";
                                                            readonly examples: readonly ["ETH (NATIVE)"];
                                                        };
                                                        readonly decimals: {
                                                            readonly type: "integer";
                                                            readonly format: "int32";
                                                            readonly examples: readonly [18];
                                                            readonly minimum: -2147483648;
                                                            readonly maximum: 2147483647;
                                                        };
                                                        readonly contract_address: {
                                                            readonly type: "string";
                                                        };
                                                        readonly from_address: {
                                                            readonly type: "string";
                                                        };
                                                        readonly to_address: {
                                                            readonly type: "string";
                                                        };
                                                        readonly price: {
                                                            readonly type: "string";
                                                            readonly examples: readonly ["20000000000000000"];
                                                        };
                                                    };
                                                };
                                            };
                                            readonly er20_transfers: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly symbol: {
                                                            readonly type: "string";
                                                            readonly examples: readonly ["ETH"];
                                                        };
                                                        readonly name: {
                                                            readonly type: "string";
                                                            readonly examples: readonly ["Wrapped ETH"];
                                                        };
                                                        readonly decimals: {
                                                            readonly type: "integer";
                                                            readonly format: "int32";
                                                            readonly examples: readonly [18];
                                                            readonly minimum: -2147483648;
                                                            readonly maximum: 2147483647;
                                                        };
                                                        readonly contract_address: {
                                                            readonly type: "string";
                                                        };
                                                        readonly from_address: {
                                                            readonly type: "string";
                                                        };
                                                        readonly to_address: {
                                                            readonly type: "string";
                                                        };
                                                        readonly price: {
                                                            readonly type: "string";
                                                            readonly examples: readonly ["1000000000000000"];
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    readonly cached_videos: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly original: {
                                                readonly type: "string";
                                                readonly examples: readonly ["https://cdn.blockspan.com/53616....858b88e59591f.mp4"];
                                            };
                                            readonly content_type: {
                                                readonly type: "string";
                                                readonly examples: readonly ["video/mp4"];
                                            };
                                        };
                                    };
                                    readonly cached_images: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly tiny_100_100: {
                                                readonly type: "string";
                                                readonly examples: readonly ["https://cdn.blockspan.com/53616....0d623_100_100.webp"];
                                            };
                                            readonly small_250_250: {
                                                readonly type: "string";
                                                readonly examples: readonly ["https://cdn.blockspan.com/53616....0d623_250_250.webp"];
                                            };
                                            readonly medium_500_500: {
                                                readonly type: "string";
                                                readonly examples: readonly ["https://cdn.blockspan.com/53616....0d623_500_500.webp"];
                                            };
                                            readonly large_1000_1000: {
                                                readonly type: "string";
                                                readonly examples: readonly ["https://cdn.blockspan.com/53616....0d623_1000_1000.webp"];
                                            };
                                            readonly original: {
                                                readonly type: "string";
                                                readonly examples: readonly ["https://cdn.blockspan.com/53616....0d623.webp"];
                                            };
                                            readonly content_type: {
                                                readonly type: "string";
                                                readonly examples: readonly ["image/webp"];
                                            };
                                        };
                                    };
                                    readonly cached_other_assets: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly original: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["https://cdn.blockspan.com/53616....690729fbfa7ae.mov"];
                                                };
                                                readonly content_type: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["video/quicktime"];
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftHistory: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["eth-main", "arbitrum-main", "optimism-main", "poly-main", "bsc-main", "eth-goerli", "eth-sepolia"];
                    readonly default: "eth-main";
                    readonly examples: readonly ["eth-main"];
                    readonly description: "Blockchain from which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly timestamp_end: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2023-01-10T00:00:00Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Ending timestamp for which to return results.";
                };
                readonly contract_address: {
                    readonly type: "string";
                    readonly examples: readonly ["0x192762e76ac5df44e3807c92ec8911cc13111eae"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The address of the contract.";
                };
                readonly timeframe: {
                    readonly type: "string";
                    readonly enum: readonly ["1_DAY", "7_DAYS", "30_DAYS"];
                    readonly default: "30_DAYS";
                    readonly description: "The timeframe for the price history data. Valid values are 1_DAY, 7_DAYS, and 30_DAYS. This parameter determines the valid binSize values: - 1_DAY: 15_MIN or 1_HOUR - 7_DAYS: 1_HOUR or 1_DAY - 30_DAYS: 1_DAY\n";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly bin_size: {
                    readonly type: "string";
                    readonly enum: readonly ["15_MIN", "1_HOUR", "1_DAY"];
                    readonly default: "1_DAY";
                    readonly description: "The bin size for aggregating price data, depends on the selected timeframe: - 1_DAY: 15_MIN or 1_HOUR - 7_DAYS: 1_HOUR or 1_DAY - 30_DAYS: 1_DAY\n";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["chain", "timeframe", "bin_size"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly examples: readonly ["eth-main"];
                };
                readonly total_sales_volume_usd: {
                    readonly type: "string";
                    readonly examples: readonly ["19805.474020837077524754105595267885277"];
                };
                readonly min_price_usd: {
                    readonly type: "string";
                    readonly examples: readonly ["0.11959710542198777"];
                };
                readonly max_price_usd: {
                    readonly type: "string";
                    readonly examples: readonly ["8969.78290664908275"];
                };
                readonly avg_price_usd: {
                    readonly type: "string";
                    readonly examples: readonly ["113.174137261926157284309174830102202"];
                };
                readonly total_sales_volume_native: {
                    readonly type: "string";
                    readonly examples: readonly ["16.56016167862526484125"];
                };
                readonly total_sales: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [200];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly total_unique_tokens: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [36593];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly total_unique_collections: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [3345];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly total_transfers: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [43785];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly mint_transfers: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [25495];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly burn_transfers: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [752];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly transfer_transfers: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [17538];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly price_history: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly timestamp: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-01-03T00:00:00Z"];
                            };
                            readonly total_sales: {
                                readonly type: "integer";
                                readonly examples: readonly [155];
                            };
                            readonly sales_volume_usd: {
                                readonly type: "string";
                                readonly examples: readonly ["7247.130920256279104131505595267885277"];
                            };
                            readonly sales_volume_native: {
                                readonly type: "string";
                                readonly examples: readonly ["6.05962066948478474501"];
                            };
                            readonly total_unique_tokens: {
                                readonly type: "integer";
                                readonly examples: readonly [9778];
                            };
                            readonly total_transfers: {
                                readonly type: "integer";
                                readonly examples: readonly [10762];
                            };
                            readonly mint_transfers: {
                                readonly type: "integer";
                                readonly examples: readonly [6792];
                            };
                            readonly burn_transfers: {
                                readonly type: "integer";
                                readonly examples: readonly [120];
                            };
                            readonly transfer_transfers: {
                                readonly type: "integer";
                                readonly examples: readonly [3850];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftMetadata: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contract_address: {
                    readonly type: "string";
                    readonly default: "0x192762e76ac5df44e3807c92ec8911cc13111eae";
                    readonly examples: readonly ["0x192762e76ac5df44e3807c92ec8911cc13111eae"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The address of the contract.";
                };
                readonly token_id: {
                    readonly type: "integer";
                    readonly format: "int256";
                    readonly default: 10;
                    readonly examples: readonly [10];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The token id as specified in the contract.";
                };
            };
            readonly required: readonly ["contract_address", "token_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["eth-main", "arbitrum-main", "optimism-main", "poly-main", "bsc-main", "eth-goerli", "eth-sepolia"];
                    readonly default: "eth-main";
                    readonly examples: readonly ["eth-main"];
                    readonly description: "Blockchain from which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["chain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly token_type: {
                    readonly type: "string";
                    readonly examples: readonly ["erc721"];
                };
                readonly contract_address: {
                    readonly type: "string";
                    readonly examples: readonly ["0x2f329de74f67e2c1c5d2a6487ae50c99873d8589"];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["5336"];
                };
                readonly token_name: {
                    readonly type: "string";
                    readonly examples: readonly ["Bored Ape #1000"];
                };
                readonly token_description: {
                    readonly type: "string";
                    readonly examples: readonly ["The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs"];
                };
                readonly uri: {
                    readonly type: "string";
                    readonly examples: readonly ["ipfs://QmPF8ENi9oJAMDVe9TnseemayfH6ivNeycLDzJrbk5anXD/5336"];
                };
                readonly metadata: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly metadata_updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2023-01-25T19:22:03.000Z"];
                };
                readonly rarity_rank: {
                    readonly type: "integer";
                    readonly format: "int256";
                    readonly examples: readonly [17];
                };
                readonly rarity_score: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly examples: readonly [1.1561093];
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly total_transfers: {
                    readonly type: "integer";
                    readonly format: "int256";
                    readonly examples: readonly [27];
                };
                readonly minted_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2022-04-25T19:22:03.000Z"];
                };
                readonly total_current_owners: {
                    readonly type: "integer";
                    readonly format: "int256";
                    readonly examples: readonly [1];
                };
                readonly current_owners: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly address: {
                                readonly type: "string";
                                readonly examples: readonly ["0x41f56b000fffe17943fb4c182c123767af71d005"];
                            };
                            readonly quantity: {
                                readonly type: "string";
                                readonly examples: readonly ["1"];
                            };
                        };
                    };
                };
                readonly recent_price: {
                    readonly type: "object";
                    readonly properties: {
                        readonly contract_address: {
                            readonly type: "string";
                            readonly examples: readonly ["0x1b780fc912e96e7d9557080530786b927fe8706f"];
                        };
                        readonly id: {
                            readonly type: "string";
                            readonly examples: readonly ["1"];
                        };
                        readonly hash: {
                            readonly type: "string";
                            readonly examples: readonly ["0x6fe40e0a78cafa2b93be8ea47b36cb97c23efb5019b34acdd22857421382675e"];
                        };
                        readonly hash_nft_count: {
                            readonly type: "string";
                            readonly examples: readonly ["1"];
                        };
                        readonly from_address: {
                            readonly type: "string";
                            readonly examples: readonly ["0x4b461c5496dd7cc23343a0d69a83d40418d15a6e"];
                        };
                        readonly to_address: {
                            readonly type: "string";
                            readonly examples: readonly ["0x56d451c0a75b545fa69c0cf2d5d086bbdf56ab28"];
                        };
                        readonly date: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly examples: readonly ["2022-09-13T17:07:57.000Z"];
                        };
                        readonly quantity: {
                            readonly type: "string";
                            readonly examples: readonly ["2"];
                        };
                        readonly price: {
                            readonly type: "string";
                            readonly examples: readonly ["0.02"];
                        };
                        readonly price_currency: {
                            readonly type: "string";
                            readonly examples: readonly ["ETH"];
                        };
                        readonly price_usd: {
                            readonly type: "string";
                            readonly examples: readonly ["34.04356220757607"];
                        };
                        readonly price_native: {
                            readonly type: "string";
                            readonly examples: readonly ["0.02"];
                        };
                        readonly currency: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly symbol: {
                                        readonly type: "string";
                                        readonly examples: readonly ["ETH"];
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["ETH (NATIVE)"];
                                    };
                                    readonly decimals: {
                                        readonly type: "integer";
                                        readonly format: "int32";
                                        readonly examples: readonly [18];
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly contract_address: {
                                        readonly type: "string";
                                    };
                                    readonly from_address: {
                                        readonly type: "string";
                                    };
                                    readonly to_address: {
                                        readonly type: "string";
                                    };
                                    readonly price: {
                                        readonly type: "string";
                                        readonly examples: readonly ["20000000000000000"];
                                    };
                                };
                            };
                        };
                        readonly er20_transfers: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly symbol: {
                                        readonly type: "string";
                                        readonly examples: readonly ["ETH"];
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Wrapped ETH"];
                                    };
                                    readonly decimals: {
                                        readonly type: "integer";
                                        readonly format: "int32";
                                        readonly examples: readonly [18];
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly contract_address: {
                                        readonly type: "string";
                                    };
                                    readonly from_address: {
                                        readonly type: "string";
                                    };
                                    readonly to_address: {
                                        readonly type: "string";
                                    };
                                    readonly price: {
                                        readonly type: "string";
                                        readonly examples: readonly ["1000000000000000"];
                                    };
                                };
                            };
                        };
                    };
                };
                readonly cached_videos: {
                    readonly type: "object";
                    readonly properties: {
                        readonly original: {
                            readonly type: "string";
                            readonly examples: readonly ["https://cdn.blockspan.com/....bb6df098cd8bc6127.mp4"];
                        };
                        readonly content_type: {
                            readonly type: "string";
                            readonly examples: readonly ["video/mp4"];
                        };
                    };
                };
                readonly cached_images: {
                    readonly type: "object";
                    readonly properties: {
                        readonly tiny_100_100: {
                            readonly type: "string";
                            readonly examples: readonly ["https://cdn.blockspan.com/....bb6df098cd8bc6127_100_100.jpg"];
                        };
                        readonly small_250_250: {
                            readonly type: "string";
                            readonly examples: readonly ["https://cdn.blockspan.com/....bb6df098cd8bc6127_250_250.jpg"];
                        };
                        readonly medium_500_500: {
                            readonly type: "string";
                            readonly examples: readonly ["https://cdn.blockspan.com/....bb6df098cd8bc6127_500_500.jpg"];
                        };
                        readonly large_1000_1000: {
                            readonly type: "string";
                            readonly examples: readonly ["https://cdn.blockspan.com/....bb6df098cd8bc6127_1000_1000.jpg"];
                        };
                        readonly original: {
                            readonly type: "string";
                            readonly examples: readonly ["https://cdn.blockspan.com/....bb6df098cd8bc6127.jpg"];
                        };
                        readonly content_type: {
                            readonly type: "string";
                            readonly examples: readonly ["image/jpg"];
                        };
                    };
                };
                readonly cached_other_assets: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly original: {
                                readonly type: "string";
                                readonly examples: readonly ["https://cdn.blockspan.com/....690729fbfa7ae.mov"];
                            };
                            readonly content_type: {
                                readonly type: "string";
                                readonly examples: readonly ["video/quicktime"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetOwnersByCollection: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contract_address: {
                    readonly type: "string";
                    readonly default: "0x192762e76ac5df44e3807c92ec8911cc13111eae";
                    readonly examples: readonly ["0x192762e76ac5df44e3807c92ec8911cc13111eae"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The address of the contract.";
                };
            };
            readonly required: readonly ["contract_address"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["eth-main", "arbitrum-main", "optimism-main", "poly-main", "bsc-main", "eth-goerli", "eth-sepolia"];
                    readonly default: "eth-main";
                    readonly examples: readonly ["eth-main"];
                    readonly description: "Blockchain from which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly include_owner_distribution: {
                    readonly type: "string";
                    readonly default: "true";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to false to exclude token ownership distribution, default is true.";
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Pass the cursor value from previous response to fetch next set of results.";
                };
                readonly page_size: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly default: 25;
                    readonly examples: readonly [25];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results per page.";
                };
            };
            readonly required: readonly ["chain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly contract_address: {
                    readonly type: "string";
                    readonly examples: readonly ["0x1c3423c0ca4140bddbfe96092c9b9da3ec4af339"];
                };
                readonly chain: {
                    readonly type: "string";
                    readonly examples: readonly ["eth-main"];
                };
                readonly total_owners: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [200];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly unique_owners: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [200];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly owner_distribution: {
                    readonly properties: {
                        readonly one_item: {
                            readonly type: "integer";
                            readonly examples: readonly [60];
                        };
                        readonly two_to_three_items: {
                            readonly type: "integer";
                            readonly examples: readonly [50];
                        };
                        readonly four_to_ten_items: {
                            readonly type: "integer";
                            readonly examples: readonly [40];
                        };
                        readonly eleven_to_twenty_five_items: {
                            readonly type: "integer";
                            readonly examples: readonly [30];
                        };
                        readonly twenty_six_plus_items: {
                            readonly type: "integer";
                            readonly examples: readonly [20];
                        };
                    };
                    readonly type: "object";
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly examples: readonly ["KGpzb24pIjB4NDFmNTZiMDAwZmZmZTE3OTQzZmI0YzE4MmMxMjM3NjdhZjcxZDAwNSI"];
                };
                readonly per_page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [25];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly token_type: {
                                readonly type: "string";
                                readonly examples: readonly ["erc721"];
                            };
                            readonly contract_address: {
                                readonly type: "string";
                                readonly examples: readonly ["0x2f329de74f67e2c1c5d2a6487ae50c99873d8589"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly [5336];
                            };
                            readonly owner_address: {
                                readonly type: "string";
                                readonly examples: readonly ["0x20904982fa86601c46e7e489dbcea1ffe6f46287"];
                            };
                            readonly times_acquired: {
                                readonly type: "integer";
                                readonly format: "int256";
                                readonly examples: readonly [5];
                            };
                            readonly minted_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2022-03-25T19:22:03.000Z"];
                            };
                            readonly first_owned_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2022-04-25T19:22:03.000Z"];
                            };
                            readonly last_owned_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2022-05-22T14:21:13.000Z"];
                            };
                            readonly quantity: {
                                readonly type: "string";
                                readonly examples: readonly ["1"];
                            };
                            readonly owner_type: {
                                readonly type: "string";
                                readonly examples: readonly ["wallet or contract"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetOwnersByTokenId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contract_address: {
                    readonly type: "string";
                    readonly default: "0x192762e76ac5df44e3807c92ec8911cc13111eae";
                    readonly examples: readonly ["0x192762e76ac5df44e3807c92ec8911cc13111eae"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The address of the contract.";
                };
                readonly token_id: {
                    readonly type: "integer";
                    readonly format: "int256";
                    readonly default: 10;
                    readonly examples: readonly [10];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The token id as specified in the contract.";
                };
            };
            readonly required: readonly ["contract_address", "token_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["eth-main", "arbitrum-main", "optimism-main", "poly-main", "bsc-main", "eth-goerli", "eth-sepolia"];
                    readonly default: "eth-main";
                    readonly examples: readonly ["eth-main"];
                    readonly description: "Blockchain from which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Pass the cursor value from previous response to fetch next set of results.";
                };
                readonly page_size: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly default: 25;
                    readonly examples: readonly [25];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results per page.";
                };
            };
            readonly required: readonly ["chain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly contractAddress: {
                    readonly type: "string";
                    readonly examples: readonly ["0x1c3423c0ca4140bddbfe96092c9b9da3ec4af339"];
                };
                readonly tokenId: {
                    readonly type: "string";
                    readonly examples: readonly ["1000"];
                };
                readonly chain: {
                    readonly type: "string";
                    readonly examples: readonly ["eth-main"];
                };
                readonly total_owners: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [1];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly unique_owners: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [1];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly examples: readonly ["KGpzb24pIjB4NDFmNTZiMDAwZmZmZTE3OTQzZmI0YzE4MmMxMjM3NjdhZjcxZDAwNSI"];
                };
                readonly per_page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [25];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly token_type: {
                                readonly type: "string";
                                readonly examples: readonly ["erc721"];
                            };
                            readonly contract_address: {
                                readonly type: "string";
                                readonly examples: readonly ["0x2f329de74f67e2c1c5d2a6487ae50c99873d8589"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly [5336];
                            };
                            readonly owner_address: {
                                readonly type: "string";
                                readonly examples: readonly ["0x20904982fa86601c46e7e489dbcea1ffe6f46287"];
                            };
                            readonly times_acquired: {
                                readonly type: "integer";
                                readonly format: "int256";
                                readonly examples: readonly [5];
                            };
                            readonly minted_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2022-03-25T19:22:03.000Z"];
                            };
                            readonly first_owned_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2022-04-25T19:22:03.000Z"];
                            };
                            readonly last_owned_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2022-05-22T14:21:13.000Z"];
                            };
                            readonly quantity: {
                                readonly type: "string";
                                readonly examples: readonly ["1"];
                            };
                            readonly owner_type: {
                                readonly type: "string";
                                readonly examples: readonly ["wallet or contract"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTopActiveOwners: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["eth-main", "arbitrum-main", "optimism-main", "poly-main", "bsc-main", "eth-goerli", "eth-sepolia"];
                    readonly default: "eth-main";
                    readonly examples: readonly ["eth-main"];
                    readonly description: "Blockchain from which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly active_wallet_timeframe: {
                    readonly type: "string";
                    readonly enum: readonly ["1_DAY", "7_DAYS"];
                    readonly default: "1_DAY";
                    readonly description: "The timeframe for the price history data. Valid values are 1_DAY, and 7_DAYS";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly timestamp_end: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2023-01-10T00:00:00Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Ending timestamp for which to return results.";
                };
                readonly token_type: {
                    readonly type: "string";
                    readonly enum: readonly ["erc721", "erc1155"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The token type for which to return results.";
                };
                readonly transfer_type: {
                    readonly type: "string";
                    readonly enum: readonly ["mint", "burn", "transfer"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The transfer type for which to return results.";
                };
                readonly contract_address: {
                    readonly type: "string";
                    readonly examples: readonly ["0x192762e76ac5df44e3807c92ec8911cc13111eae"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The address of the contract.";
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Pass the cursor value from previous response to fetch next set of results.";
                };
                readonly page_size: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly default: 25;
                    readonly examples: readonly [25];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results per page.";
                };
            };
            readonly required: readonly ["chain", "active_wallet_timeframe"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly examples: readonly ["eth-main"];
                };
                readonly page_size: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [25];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly examples: readonly ["KGpzb24pIjB4NDFmNTZiMDAwZmZmZTE3OTQzZmI0YzE4MmMxMjM3NjdhZjcxZDAwNSI"];
                };
                readonly total_active_wallets: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [20820];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly owner_address: {
                                readonly type: "string";
                                readonly examples: readonly ["0x36c72892fcc72b52fa3b82ed3bb2a467d9079b9a"];
                            };
                            readonly total_transfers: {
                                readonly type: "integer";
                                readonly format: "int256";
                                readonly examples: readonly [172];
                            };
                            readonly erc721_transfers: {
                                readonly type: "integer";
                                readonly format: "int256";
                                readonly examples: readonly [138];
                            };
                            readonly erc1155_transfers: {
                                readonly type: "integer";
                                readonly format: "int256";
                                readonly examples: readonly [34];
                            };
                            readonly mint_transfers: {
                                readonly type: "integer";
                                readonly format: "int256";
                                readonly examples: readonly [0];
                            };
                            readonly burn_transfers: {
                                readonly type: "integer";
                                readonly format: "int256";
                                readonly examples: readonly [0];
                            };
                            readonly transfer_transfers: {
                                readonly type: "integer";
                                readonly format: "int256";
                                readonly examples: readonly [172];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTopNfTs: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["eth-main", "arbitrum-main", "optimism-main", "poly-main", "bsc-main", "eth-goerli", "eth-sepolia"];
                    readonly default: "eth-main";
                    readonly examples: readonly ["eth-main"];
                    readonly description: "Blockchain from which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly timeframe: {
                    readonly type: "string";
                    readonly enum: readonly ["1_DAY", "7_DAYS", "30_DAYS"];
                    readonly default: "1_DAY";
                    readonly description: "Default: 1_DAY";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly timestamp_end: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2023-01-10T00:00:00Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Ending timestamp for which to return results.";
                };
                readonly contract_address: {
                    readonly type: "string";
                    readonly examples: readonly ["0x192762e76ac5df44e3807c92ec8911cc13111eae"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The address of the contract.";
                };
                readonly price_start: {
                    readonly type: "integer";
                    readonly examples: readonly [4];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The minimum price in USD for tokens";
                };
                readonly price_end: {
                    readonly type: "integer";
                    readonly examples: readonly [150];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The maximum price in USD for tokens";
                };
                readonly include_nft_details: {
                    readonly type: "string";
                    readonly default: "false";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true to include nft metadata and cached media, default is false.";
                };
                readonly exclude_dex: {
                    readonly type: "string";
                    readonly default: "false";
                    readonly examples: readonly ["false"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Excludes DEX contracts from output when true. Default is false.";
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Pass the cursor value from previous response to fetch next set of results.";
                };
                readonly page_size: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly default: 25;
                    readonly examples: readonly [25];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results per page.";
                };
            };
            readonly required: readonly ["chain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly examples: readonly ["eth-main"];
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly examples: readonly ["KGpzb24pIjB4NDFmNTZiMDAwZmZmZTE3OTQzZmI0YzE4MmMxMjM3NjdhZjcxZDAwNSI"];
                };
                readonly per_page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [25];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly total_sales: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [200];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly price_usd: {
                                readonly type: "string";
                                readonly examples: readonly ["32.88920399104663675"];
                            };
                            readonly price_currency: {
                                readonly type: "string";
                                readonly examples: readonly ["ETH"];
                            };
                            readonly price_native: {
                                readonly type: "string";
                                readonly examples: readonly ["0.0275"];
                            };
                            readonly token_type: {
                                readonly type: "string";
                                readonly examples: readonly ["erc721"];
                            };
                            readonly contract_address: {
                                readonly type: "string";
                                readonly examples: readonly ["0x0c9aec85c7ef2b5407c53b02b09629e838744268"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["9009"];
                            };
                            readonly from_address: {
                                readonly type: "string";
                                readonly examples: readonly ["0x1083f7d1b0c5b981d85a94038025237ceaefd8fb"];
                            };
                            readonly to_address: {
                                readonly type: "string";
                                readonly examples: readonly ["0xc8e3701576d749a5208e85ae0d2e18198f4e9184"];
                            };
                            readonly transfer_type: {
                                readonly type: "string";
                                readonly examples: readonly ["transfer"];
                            };
                            readonly block_timestamp: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-01-03T09:17:59.000Z"];
                            };
                            readonly transaction_hash: {
                                readonly type: "string";
                                readonly examples: readonly ["0xc7f064c562041efee63a9bb38bc165f636e96b8e2d739d20f0b1fa5e65a2dd30"];
                            };
                            readonly quantity: {
                                readonly type: "string";
                                readonly examples: readonly ["1"];
                            };
                            readonly nft_details: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly token_type: {
                                        readonly type: "string";
                                        readonly examples: readonly ["erc721"];
                                    };
                                    readonly contract_address: {
                                        readonly type: "string";
                                        readonly examples: readonly ["0x2f329de74f67e2c1c5d2a6487ae50c99873d8589"];
                                    };
                                    readonly id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["5336"];
                                    };
                                    readonly token_name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Bored Ape #1000"];
                                    };
                                    readonly token_description: {
                                        readonly type: "string";
                                        readonly examples: readonly ["The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs"];
                                    };
                                    readonly uri: {
                                        readonly type: "string";
                                        readonly examples: readonly ["ipfs://QmPF8ENi9oJAMDVe9TnseemayfH6ivNeycLDzJrbk5anXD/5336"];
                                    };
                                    readonly metadata: {
                                        readonly type: "object";
                                        readonly additionalProperties: true;
                                    };
                                    readonly metadata_updated_at: {
                                        readonly type: "string";
                                        readonly examples: readonly ["2023-01-25T19:22:03.000Z"];
                                    };
                                    readonly rarity_rank: {
                                        readonly type: "integer";
                                        readonly examples: readonly [17];
                                    };
                                    readonly rarity_score: {
                                        readonly type: "number";
                                        readonly format: "float";
                                        readonly examples: readonly [1.1561093];
                                        readonly minimum: -3.402823669209385e+38;
                                        readonly maximum: 3.402823669209385e+38;
                                    };
                                    readonly total_transfers: {
                                        readonly type: "integer";
                                        readonly examples: readonly [27];
                                    };
                                    readonly cached_videos: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly original: {
                                                readonly type: "string";
                                                readonly examples: readonly ["https://cdn.blockspan.com/....bb6df098cd8bc6127.mp4"];
                                            };
                                        };
                                    };
                                    readonly cached_images: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly tiny_100_100: {
                                                readonly type: "string";
                                                readonly examples: readonly ["https://cdn.blockspan.com/....bb6df098cd8bc6127_100_100.jpg"];
                                            };
                                            readonly small_250_250: {
                                                readonly type: "string";
                                                readonly examples: readonly ["https://cdn.blockspan.com/....bb6df098cd8bc6127_250_250.jpg"];
                                            };
                                            readonly medium_500_500: {
                                                readonly type: "string";
                                                readonly examples: readonly ["https://cdn.blockspan.com/....bb6df098cd8bc6127_500_500.jpg"];
                                            };
                                            readonly large_1000_1000: {
                                                readonly type: "string";
                                                readonly examples: readonly ["https://cdn.blockspan.com/....bb6df098cd8bc6127_1000_1000.jpg"];
                                            };
                                            readonly original: {
                                                readonly type: "string";
                                                readonly examples: readonly ["https://cdn.blockspan.com/....bb6df098cd8bc6127.jpg"];
                                            };
                                            readonly content_type: {
                                                readonly type: "string";
                                                readonly examples: readonly ["image/jpg"];
                                            };
                                        };
                                    };
                                    readonly cached_other_assets: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly original: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["https://cdn.blockspan.com/....690729fbfa7ae.mov"];
                                                };
                                                readonly content_type: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["video/quicktime"];
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTransfersByCollection: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contract_address: {
                    readonly type: "string";
                    readonly default: "0x192762e76ac5df44e3807c92ec8911cc13111eae";
                    readonly examples: readonly ["0x192762e76ac5df44e3807c92ec8911cc13111eae"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The address of the contract.";
                };
            };
            readonly required: readonly ["contract_address"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["eth-main", "arbitrum-main", "optimism-main", "poly-main", "bsc-main", "eth-goerli", "eth-sepolia"];
                    readonly default: "eth-main";
                    readonly examples: readonly ["eth-main"];
                    readonly description: "Blockchain from which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly transfer_type: {
                    readonly type: "string";
                    readonly enum: readonly ["mint", "burn", "transfer"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The transfer type for which to return results.";
                };
                readonly from_address: {
                    readonly type: "string";
                    readonly examples: readonly ["0x0000000000000000000000000000000000000000"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters NFTs transfered from this wallet address";
                };
                readonly to_address: {
                    readonly type: "string";
                    readonly examples: readonly ["0xf68c793cff2071698dcc52027bd175a12236fb7d"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters NFTs transfered to this wallet address";
                };
                readonly block_start: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 1;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Starting block number for which to return results.";
                };
                readonly block_end: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Ending block number for which to return results.";
                };
                readonly hash: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The transaction hash for which to return results.";
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Pass the cursor value from previous response to fetch next set of results.";
                };
                readonly page_size: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly default: 25;
                    readonly examples: readonly [25];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results per page.";
                };
            };
            readonly required: readonly ["chain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly examples: readonly ["eth-main"];
                };
                readonly total: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [200];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly examples: readonly ["KGpzb24pIjB4NDFmNTZiMDAwZmZmZTE3OTQzZmI0YzE4MmMxMjM3NjdhZjcxZDAwNSI"];
                };
                readonly per_page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [25];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly token_type: {
                                readonly type: "string";
                                readonly examples: readonly ["erc721"];
                            };
                            readonly contract_address: {
                                readonly type: "string";
                                readonly examples: readonly ["0x2f329de74f67e2c1c5d2a6487ae50c99873d8589"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly [5336];
                            };
                            readonly operator: {
                                readonly type: "string";
                                readonly examples: readonly ["0x20904982fa86601c46e7e489dbcea1ffe6f46287"];
                            };
                            readonly from_address: {
                                readonly type: "string";
                                readonly examples: readonly ["0x20904982fa86601c46e7e489dbcea1ffe6f46287"];
                            };
                            readonly to_address: {
                                readonly type: "string";
                                readonly examples: readonly ["0x0000000000000000000000000000000000000000"];
                            };
                            readonly transfer_type: {
                                readonly type: "string";
                                readonly examples: readonly ["burn"];
                            };
                            readonly block_timestamp: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2022-04-25T19:22:03.000Z"];
                            };
                            readonly block_number: {
                                readonly type: "string";
                                readonly examples: readonly ["14057345"];
                            };
                            readonly log_index: {
                                readonly type: "integer";
                                readonly examples: readonly [22];
                            };
                            readonly transaction_hash: {
                                readonly type: "string";
                                readonly examples: readonly ["0x042b460b41c08777ef9f3f79adb50465ae15d0119ae34623f9f201fa18dfef1a"];
                            };
                            readonly batch_index: {
                                readonly type: "integer";
                                readonly format: "uint256";
                                readonly examples: readonly [5336];
                            };
                            readonly quantity: {
                                readonly type: "string";
                                readonly examples: readonly ["1"];
                            };
                            readonly price: {
                                readonly type: "array";
                                readonly items: {
                                    readonly properties: {
                                        readonly contract_address: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0x1b780fc912e96e7d9557080530786b927fe8706f"];
                                        };
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["1"];
                                        };
                                        readonly hash: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0x6fe40e0a78cafa2b93be8ea47b36cb97c23efb5019b34acdd22857421382675e"];
                                        };
                                        readonly hash_nft_count: {
                                            readonly type: "string";
                                            readonly examples: readonly ["1"];
                                        };
                                        readonly from_address: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0x4b461c5496dd7cc23343a0d69a83d40418d15a6e"];
                                        };
                                        readonly to_address: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0x56d451c0a75b545fa69c0cf2d5d086bbdf56ab28"];
                                        };
                                        readonly date: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                            readonly examples: readonly ["2022-09-13T17:07:57.000Z"];
                                        };
                                        readonly quantity: {
                                            readonly type: "string";
                                            readonly examples: readonly ["2"];
                                        };
                                        readonly price: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0.02"];
                                        };
                                        readonly price_currency: {
                                            readonly type: "string";
                                            readonly examples: readonly ["ETH"];
                                        };
                                        readonly price_usd: {
                                            readonly type: "string";
                                            readonly examples: readonly ["34.04356220757607"];
                                        };
                                        readonly price_native: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0.02"];
                                        };
                                        readonly currency: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly symbol: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["ETH"];
                                                    };
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["ETH (NATIVE)"];
                                                    };
                                                    readonly decimals: {
                                                        readonly type: "integer";
                                                        readonly format: "int32";
                                                        readonly examples: readonly [18];
                                                        readonly minimum: -2147483648;
                                                        readonly maximum: 2147483647;
                                                    };
                                                    readonly contract_address: {
                                                        readonly type: "string";
                                                    };
                                                    readonly from_address: {
                                                        readonly type: "string";
                                                    };
                                                    readonly to_address: {
                                                        readonly type: "string";
                                                    };
                                                    readonly price: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["20000000000000000"];
                                                    };
                                                };
                                            };
                                        };
                                        readonly er20_transfers: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly symbol: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["ETH"];
                                                    };
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["Wrapped ETH"];
                                                    };
                                                    readonly decimals: {
                                                        readonly type: "integer";
                                                        readonly format: "int32";
                                                        readonly examples: readonly [18];
                                                        readonly minimum: -2147483648;
                                                        readonly maximum: 2147483647;
                                                    };
                                                    readonly contract_address: {
                                                        readonly type: "string";
                                                    };
                                                    readonly from_address: {
                                                        readonly type: "string";
                                                    };
                                                    readonly to_address: {
                                                        readonly type: "string";
                                                    };
                                                    readonly price: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["1000000000000000"];
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    readonly type: "object";
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTransfersByOwner: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly owner_address: {
                    readonly type: "string";
                    readonly default: "0xf68c793cff2071698dcc52027bd175a12236fb7d";
                    readonly examples: readonly ["0xf68c793cff2071698dcc52027bd175a12236fb7d"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The wallet address of the NFT owner.";
                };
            };
            readonly required: readonly ["owner_address"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["eth-main", "arbitrum-main", "optimism-main", "poly-main", "bsc-main", "eth-goerli", "eth-sepolia"];
                    readonly default: "eth-main";
                    readonly examples: readonly ["eth-main"];
                    readonly description: "Blockchain from which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly transfer_type: {
                    readonly type: "string";
                    readonly enum: readonly ["mint", "burn", "transfer"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The transfer type for which to return results.";
                };
                readonly token_type: {
                    readonly type: "string";
                    readonly enum: readonly ["erc721", "erc1155"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The token type for which to return results.";
                };
                readonly block_start: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 1;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Starting block number for which to return results.";
                };
                readonly block_end: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Ending block number for which to return results.";
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Pass the cursor value from previous response to fetch next set of results.";
                };
                readonly page_size: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly default: 25;
                    readonly examples: readonly [25];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results per page.";
                };
            };
            readonly required: readonly ["chain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly examples: readonly ["eth-main"];
                };
                readonly owner_address: {
                    readonly type: "string";
                    readonly examples: readonly ["0x85e3351504c61a3491c6619bce130b6fe02f148d"];
                };
                readonly total: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [200];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly examples: readonly ["KGpzb24pIjB4NDFmNTZiMDAwZmZmZTE3OTQzZmI0YzE4MmMxMjM3NjdhZjcxZDAwNSI"];
                };
                readonly per_page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [25];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly token_type: {
                                readonly type: "string";
                                readonly examples: readonly ["erc721"];
                            };
                            readonly contract_address: {
                                readonly type: "string";
                                readonly examples: readonly ["0x2f329de74f67e2c1c5d2a6487ae50c99873d8589"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly [5336];
                            };
                            readonly operator: {
                                readonly type: "string";
                                readonly examples: readonly ["0x20904982fa86601c46e7e489dbcea1ffe6f46287"];
                            };
                            readonly from_address: {
                                readonly type: "string";
                                readonly examples: readonly ["0x20904982fa86601c46e7e489dbcea1ffe6f46287"];
                            };
                            readonly to_address: {
                                readonly type: "string";
                                readonly examples: readonly ["0x0000000000000000000000000000000000000000"];
                            };
                            readonly transfer_type: {
                                readonly type: "string";
                                readonly examples: readonly ["burn"];
                            };
                            readonly block_timestamp: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2022-04-25T19:22:03.000Z"];
                            };
                            readonly block_number: {
                                readonly type: "string";
                                readonly examples: readonly ["14057345"];
                            };
                            readonly log_index: {
                                readonly type: "integer";
                                readonly examples: readonly [22];
                            };
                            readonly transaction_hash: {
                                readonly type: "string";
                                readonly examples: readonly ["0x042b460b41c08777ef9f3f79adb50465ae15d0119ae34623f9f201fa18dfef1a"];
                            };
                            readonly batch_index: {
                                readonly type: "integer";
                                readonly format: "uint256";
                                readonly examples: readonly [5336];
                            };
                            readonly quantity: {
                                readonly type: "string";
                                readonly examples: readonly ["1"];
                            };
                            readonly price: {
                                readonly type: "array";
                                readonly items: {
                                    readonly properties: {
                                        readonly contract_address: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0x1b780fc912e96e7d9557080530786b927fe8706f"];
                                        };
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["1"];
                                        };
                                        readonly hash: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0x6fe40e0a78cafa2b93be8ea47b36cb97c23efb5019b34acdd22857421382675e"];
                                        };
                                        readonly hash_nft_count: {
                                            readonly type: "string";
                                            readonly examples: readonly ["1"];
                                        };
                                        readonly from_address: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0x4b461c5496dd7cc23343a0d69a83d40418d15a6e"];
                                        };
                                        readonly to_address: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0x56d451c0a75b545fa69c0cf2d5d086bbdf56ab28"];
                                        };
                                        readonly date: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                            readonly examples: readonly ["2022-09-13T17:07:57.000Z"];
                                        };
                                        readonly quantity: {
                                            readonly type: "string";
                                            readonly examples: readonly ["2"];
                                        };
                                        readonly price: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0.02"];
                                        };
                                        readonly price_currency: {
                                            readonly type: "string";
                                            readonly examples: readonly ["ETH"];
                                        };
                                        readonly price_usd: {
                                            readonly type: "string";
                                            readonly examples: readonly ["34.04356220757607"];
                                        };
                                        readonly price_native: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0.02"];
                                        };
                                        readonly currency: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly symbol: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["ETH"];
                                                    };
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["ETH (NATIVE)"];
                                                    };
                                                    readonly decimals: {
                                                        readonly type: "integer";
                                                        readonly format: "int32";
                                                        readonly examples: readonly [18];
                                                        readonly minimum: -2147483648;
                                                        readonly maximum: 2147483647;
                                                    };
                                                    readonly contract_address: {
                                                        readonly type: "string";
                                                    };
                                                    readonly from_address: {
                                                        readonly type: "string";
                                                    };
                                                    readonly to_address: {
                                                        readonly type: "string";
                                                    };
                                                    readonly price: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["20000000000000000"];
                                                    };
                                                };
                                            };
                                        };
                                        readonly er20_transfers: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly symbol: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["ETH"];
                                                    };
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["Wrapped ETH"];
                                                    };
                                                    readonly decimals: {
                                                        readonly type: "integer";
                                                        readonly format: "int32";
                                                        readonly examples: readonly [18];
                                                        readonly minimum: -2147483648;
                                                        readonly maximum: 2147483647;
                                                    };
                                                    readonly contract_address: {
                                                        readonly type: "string";
                                                    };
                                                    readonly from_address: {
                                                        readonly type: "string";
                                                    };
                                                    readonly to_address: {
                                                        readonly type: "string";
                                                    };
                                                    readonly price: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["1000000000000000"];
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    readonly type: "object";
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTransfersByTokenId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contract_address: {
                    readonly type: "string";
                    readonly default: "0x192762e76ac5df44e3807c92ec8911cc13111eae";
                    readonly examples: readonly ["0x192762e76ac5df44e3807c92ec8911cc13111eae"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The address of the contract.";
                };
                readonly token_id: {
                    readonly type: "integer";
                    readonly format: "int256";
                    readonly default: 10;
                    readonly examples: readonly [10];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The token id as specified in the contract.";
                };
            };
            readonly required: readonly ["contract_address", "token_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["eth-main", "arbitrum-main", "optimism-main", "poly-main", "bsc-main", "eth-goerli", "eth-sepolia"];
                    readonly default: "eth-main";
                    readonly examples: readonly ["eth-main"];
                    readonly description: "Blockchain from which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly transfer_type: {
                    readonly type: "string";
                    readonly enum: readonly ["mint", "burn", "transfer"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The transfer type for which to return results.";
                };
                readonly block_start: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 1;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Starting block number for which to return results.";
                };
                readonly block_end: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Ending block number for which to return results.";
                };
                readonly hash: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The transaction hash for which to return results.";
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Pass the cursor value from previous response to fetch next set of results.";
                };
                readonly page_size: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly default: 25;
                    readonly examples: readonly [25];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results per page.";
                };
            };
            readonly required: readonly ["chain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly examples: readonly ["eth-main"];
                };
                readonly total: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [200];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly examples: readonly ["KGpzb24pIjB4NDFmNTZiMDAwZmZmZTE3OTQzZmI0YzE4MmMxMjM3NjdhZjcxZDAwNSI"];
                };
                readonly per_page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [25];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly token_type: {
                                readonly type: "string";
                                readonly examples: readonly ["erc721"];
                            };
                            readonly contract_address: {
                                readonly type: "string";
                                readonly examples: readonly ["0x2f329de74f67e2c1c5d2a6487ae50c99873d8589"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly [5336];
                            };
                            readonly operator: {
                                readonly type: "string";
                                readonly examples: readonly ["0x20904982fa86601c46e7e489dbcea1ffe6f46287"];
                            };
                            readonly from_address: {
                                readonly type: "string";
                                readonly examples: readonly ["0x20904982fa86601c46e7e489dbcea1ffe6f46287"];
                            };
                            readonly to_address: {
                                readonly type: "string";
                                readonly examples: readonly ["0x0000000000000000000000000000000000000000"];
                            };
                            readonly transfer_type: {
                                readonly type: "string";
                                readonly examples: readonly ["burn"];
                            };
                            readonly block_timestamp: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2022-04-25T19:22:03.000Z"];
                            };
                            readonly block_number: {
                                readonly type: "string";
                                readonly examples: readonly ["14057345"];
                            };
                            readonly log_index: {
                                readonly type: "integer";
                                readonly examples: readonly [22];
                            };
                            readonly transaction_hash: {
                                readonly type: "string";
                                readonly examples: readonly ["0x042b460b41c08777ef9f3f79adb50465ae15d0119ae34623f9f201fa18dfef1a"];
                            };
                            readonly batch_index: {
                                readonly type: "integer";
                                readonly format: "uint256";
                                readonly examples: readonly [5336];
                            };
                            readonly quantity: {
                                readonly type: "string";
                                readonly examples: readonly ["1"];
                            };
                            readonly price: {
                                readonly type: "array";
                                readonly items: {
                                    readonly properties: {
                                        readonly contract_address: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0x1b780fc912e96e7d9557080530786b927fe8706f"];
                                        };
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["1"];
                                        };
                                        readonly hash: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0x6fe40e0a78cafa2b93be8ea47b36cb97c23efb5019b34acdd22857421382675e"];
                                        };
                                        readonly hash_nft_count: {
                                            readonly type: "string";
                                            readonly examples: readonly ["1"];
                                        };
                                        readonly from_address: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0x4b461c5496dd7cc23343a0d69a83d40418d15a6e"];
                                        };
                                        readonly to_address: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0x56d451c0a75b545fa69c0cf2d5d086bbdf56ab28"];
                                        };
                                        readonly date: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                            readonly examples: readonly ["2022-09-13T17:07:57.000Z"];
                                        };
                                        readonly quantity: {
                                            readonly type: "string";
                                            readonly examples: readonly ["2"];
                                        };
                                        readonly price: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0.02"];
                                        };
                                        readonly price_currency: {
                                            readonly type: "string";
                                            readonly examples: readonly ["ETH"];
                                        };
                                        readonly price_usd: {
                                            readonly type: "string";
                                            readonly examples: readonly ["34.04356220757607"];
                                        };
                                        readonly price_native: {
                                            readonly type: "string";
                                            readonly examples: readonly ["0.02"];
                                        };
                                        readonly currency: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly symbol: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["ETH"];
                                                    };
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["ETH (NATIVE)"];
                                                    };
                                                    readonly decimals: {
                                                        readonly type: "integer";
                                                        readonly format: "int32";
                                                        readonly examples: readonly [18];
                                                        readonly minimum: -2147483648;
                                                        readonly maximum: 2147483647;
                                                    };
                                                    readonly contract_address: {
                                                        readonly type: "string";
                                                    };
                                                    readonly from_address: {
                                                        readonly type: "string";
                                                    };
                                                    readonly to_address: {
                                                        readonly type: "string";
                                                    };
                                                    readonly price: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["20000000000000000"];
                                                    };
                                                };
                                            };
                                        };
                                        readonly er20_transfers: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly symbol: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["ETH"];
                                                    };
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["Wrapped ETH"];
                                                    };
                                                    readonly decimals: {
                                                        readonly type: "integer";
                                                        readonly format: "int32";
                                                        readonly examples: readonly [18];
                                                        readonly minimum: -2147483648;
                                                        readonly maximum: 2147483647;
                                                    };
                                                    readonly contract_address: {
                                                        readonly type: "string";
                                                    };
                                                    readonly from_address: {
                                                        readonly type: "string";
                                                    };
                                                    readonly to_address: {
                                                        readonly type: "string";
                                                    };
                                                    readonly price: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["1000000000000000"];
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    readonly type: "object";
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RefreshCollectionMetadata: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contract_address: {
                    readonly type: "string";
                    readonly default: "0x192762e76ac5df44e3807c92ec8911cc13111eae";
                    readonly examples: readonly ["0x192762e76ac5df44e3807c92ec8911cc13111eae"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The address of the contract.";
                };
            };
            readonly required: readonly ["contract_address"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["eth-main", "arbitrum-main", "optimism-main", "poly-main", "bsc-main", "eth-goerli", "eth-sepolia"];
                    readonly default: "eth-main";
                    readonly examples: readonly ["eth-main"];
                    readonly description: "Blockchain from which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["chain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly msg: {
                    readonly type: "string";
                    readonly examples: readonly ["Metadata refresh submitted for requested Collection."];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RefreshNftMetadata: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contract_address: {
                    readonly type: "string";
                    readonly default: "0x192762e76ac5df44e3807c92ec8911cc13111eae";
                    readonly examples: readonly ["0x192762e76ac5df44e3807c92ec8911cc13111eae"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The address of the contract.";
                };
                readonly token_id: {
                    readonly type: "integer";
                    readonly format: "int256";
                    readonly default: 10;
                    readonly examples: readonly [10];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The token id as specified in the contract.";
                };
            };
            readonly required: readonly ["contract_address", "token_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["eth-main", "arbitrum-main", "optimism-main", "poly-main", "bsc-main", "eth-goerli", "eth-sepolia"];
                    readonly default: "eth-main";
                    readonly examples: readonly ["eth-main"];
                    readonly description: "Blockchain from which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["chain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly msg: {
                    readonly type: "string";
                    readonly examples: readonly ["Metadata refresh submitted for requested NFT."];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RefreshOwnerMetadata: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly owner_address: {
                    readonly type: "string";
                    readonly default: "0xf68c793cff2071698dcc52027bd175a12236fb7d";
                    readonly examples: readonly ["0xf68c793cff2071698dcc52027bd175a12236fb7d"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The wallet address of the NFT owner.";
                };
            };
            readonly required: readonly ["owner_address"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["eth-main", "arbitrum-main", "optimism-main", "poly-main", "bsc-main", "eth-goerli", "eth-sepolia"];
                    readonly default: "eth-main";
                    readonly examples: readonly ["eth-main"];
                    readonly description: "Blockchain from which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["chain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly msg: {
                    readonly type: "string";
                    readonly examples: readonly ["Metadata refresh submitted for requested Owner."];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SearchNfTs: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly enum: readonly ["eth-main", "arbitrum-main", "optimism-main", "poly-main", "bsc-main", "eth-goerli", "eth-sepolia"];
                    readonly default: "eth-main";
                    readonly examples: readonly ["eth-main"];
                    readonly description: "Blockchain from which to return results.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly token_type: {
                    readonly type: "string";
                    readonly enum: readonly ["erc721", "erc1155"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The token type for which to return results.";
                };
                readonly q: {
                    readonly type: "string";
                    readonly default: "Ape";
                    readonly examples: readonly ["Ape"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The search string for which to return results.";
                };
                readonly filter: {
                    readonly type: "string";
                    readonly enum: readonly ["token_name", "token_description", "token_attributes", "all"];
                    readonly default: "token_name";
                    readonly examples: readonly ["token_name"];
                    readonly description: "The search fields to match on.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly page_size: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly default: 25;
                    readonly examples: readonly [25];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results per page.";
                };
            };
            readonly required: readonly ["chain", "q", "filter"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly chain: {
                    readonly type: "string";
                    readonly examples: readonly ["eth-main"];
                };
                readonly total: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [200];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly per_page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly examples: readonly [25];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly token_type: {
                                readonly type: "string";
                                readonly examples: readonly ["erc721"];
                            };
                            readonly contract_address: {
                                readonly type: "string";
                                readonly examples: readonly ["0x2f329de74f67e2c1c5d2a6487ae50c99873d8589"];
                            };
                            readonly example_token_id: {
                                readonly type: "string";
                                readonly examples: readonly ["5336"];
                            };
                            readonly example_token_name: {
                                readonly type: "string";
                                readonly examples: readonly ["Bored Ape #1000"];
                            };
                            readonly example_token_description: {
                                readonly type: "string";
                                readonly examples: readonly ["The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { FindExchangeCollections, GetAddressOfEnsName, GetAllCollections, GetAllExchangeCollections, GetAllNfTs, GetAllTransfers, GetCollection, GetCollectionPriceHistory, GetCollectionPriceSummary, GetCollectionsByOwner, GetEnsNamesOfAddresses, GetExchangeCollection, GetExchangeCollectionsRanking, GetNfTsByCollection, GetNfTsByOwner, GetNftHistory, GetNftMetadata, GetOwnersByCollection, GetOwnersByTokenId, GetTopActiveOwners, GetTopNfTs, GetTransfersByCollection, GetTransfersByOwner, GetTransfersByTokenId, RefreshCollectionMetadata, RefreshNftMetadata, RefreshOwnerMetadata, SearchNfTs };
