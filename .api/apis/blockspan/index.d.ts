import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * Returns recently created or all historical collections. Filter by token type.
     *
     * @summary Get All Collections
     */
    getAllCollections(metadata: types.GetAllCollectionsMetadataParam): Promise<FetchResponse<200, types.GetAllCollectionsResponse200>>;
    /**
     * Returns collection info by contract address.
     *
     * @summary Get Single Collection
     */
    getCollection(metadata: types.GetCollectionMetadataParam): Promise<FetchResponse<200, types.GetCollectionResponse200>>;
    /**
     * Returns all currently owned collections by owner's wallet address.
     *
     * @summary Get All Collections Of Owner
     */
    getCollectionsByOwner(metadata: types.GetCollectionsByOwnerMetadataParam): Promise<FetchResponse<200, types.GetCollectionsByOwnerResponse200>>;
    /**
     * Sales pricing summary for given contract_address by various periods
     *
     * @summary Get Collection Price Summary
     */
    getCollectionPriceSummary(metadata: types.GetCollectionPriceSummaryMetadataParam): Promise<FetchResponse<200, types.GetCollectionPriceSummaryResponse200>>;
    /**
     * Sales pricing history for given contract_address by timeframe and binSize
     *
     * @summary Get Collection Price History
     */
    getCollectionPriceHistory(metadata: types.GetCollectionPriceHistoryMetadataParam): Promise<FetchResponse<200, types.GetCollectionPriceHistoryResponse200>>;
    /**
     * Returns the wallet address for a given ENS name or a status 404 if the name is not
     * found.
     *
     * @summary Get Address Of ENS Name
     */
    getAddressOfENSName(metadata: types.GetAddressOfEnsNameMetadataParam): Promise<FetchResponse<200, types.GetAddressOfEnsNameResponse200>>;
    /**
     * Returns an array of ENS names for a comma-separated list of wallet addresses. If no
     * match is found, an empty string is returned.
     *
     * @summary Get ENS Names Of Addresses
     */
    getENSNamesOfAddresses(metadata: types.GetEnsNamesOfAddressesMetadataParam): Promise<FetchResponse<200, types.GetEnsNamesOfAddressesResponse200>>;
    /**
     * Returns recent updated exchange collections.
     *
     * @summary Get All Exchange Collections
     */
    getAllExchangeCollections(metadata: types.GetAllExchangeCollectionsMetadataParam): Promise<FetchResponse<200, types.GetAllExchangeCollectionsResponse200>>;
    /**
     * Returns exchange collection info by exchange key.
     *
     * @summary Get Single Exchange Collection
     */
    getExchangeCollection(metadata: types.GetExchangeCollectionMetadataParam): Promise<FetchResponse<200, types.GetExchangeCollectionResponse200>>;
    /**
     * Returns top exchange collections ranked by specified metric.
     *
     * @summary Get Exchange Collections By Ranking
     */
    getExchangeCollectionsRanking(metadata: types.GetExchangeCollectionsRankingMetadataParam): Promise<FetchResponse<200, types.GetExchangeCollectionsRankingResponse200>>;
    /**
     * Searches for exchange collections by specified criteria.
     *
     * @summary Find Exchange Collections
     */
    findExchangeCollections(metadata: types.FindExchangeCollectionsMetadataParam): Promise<FetchResponse<200, types.FindExchangeCollectionsResponse200>>;
    /**
     * Submits a request to refresh NFT Metadata by contract address and token id.
     *
     * @summary Refresh NFT Metadata
     */
    refreshNFTMetadata(metadata: types.RefreshNftMetadataMetadataParam): Promise<FetchResponse<200, types.RefreshNftMetadataResponse200>>;
    /**
     * Submits a request to refresh NFT Metadata for entire collection.
     *
     * @summary Refresh Collection Metadata
     */
    refreshCollectionMetadata(metadata: types.RefreshCollectionMetadataMetadataParam): Promise<FetchResponse<200, types.RefreshCollectionMetadataResponse200>>;
    /**
     * Submits a request to refresh NFT Metadata for all tokens owned by an address.
     *
     * @summary Refresh Metadata of Owner's Tokens
     */
    refreshOwnerMetadata(metadata: types.RefreshOwnerMetadataMetadataParam): Promise<FetchResponse<200, types.RefreshOwnerMetadataResponse200>>;
    /**
     * Returns recently created NFTs. Filter by token type.
     *
     * @summary Get All NFTs
     */
    getAllNFTs(metadata: types.GetAllNfTsMetadataParam): Promise<FetchResponse<200, types.GetAllNfTsResponse200>>;
    /**
     * Returns NFTs across the chain in descending order by price in USD
     *
     * @summary Get Top NFTs
     */
    getTopNFTs(metadata: types.GetTopNfTsMetadataParam): Promise<FetchResponse<200, types.GetTopNfTsResponse200>>;
    /**
     * Returns nft transfer history over given timeframe
     *
     * @summary Get NFT history
     */
    getNftHistory(metadata: types.GetNftHistoryMetadataParam): Promise<FetchResponse<200, types.GetNftHistoryResponse200>>;
    /**
     * Returns all NFTs with Metadata for a given collection (contract address).
     *
     * @summary Get All NFTs Of Collection
     */
    getNFTsByCollection(metadata: types.GetNfTsByCollectionMetadataParam): Promise<FetchResponse<200, types.GetNfTsByCollectionResponse200>>;
    /**
     * Returns a NFT with Metadata by contract address and token id.
     *
     * @summary Get Single NFT
     */
    getNFTMetadata(metadata: types.GetNftMetadataMetadataParam): Promise<FetchResponse<200, types.GetNftMetadataResponse200>>;
    /**
     * Returns all currently owned NFTs by owner's wallet address.
     *
     * @summary Get All NFTs Of Owner
     */
    getNFTsByOwner(metadata: types.GetNfTsByOwnerMetadataParam): Promise<FetchResponse<200, types.GetNfTsByOwnerResponse200>>;
    /**
     * Uses fuzzy matching to discover NFT collections.
     *
     * @summary Find NFTs
     */
    searchNFTs(metadata: types.SearchNfTsMetadataParam): Promise<FetchResponse<200, types.SearchNfTsResponse200>>;
    /**
     * Returns recently created transfers. Filter by token type and transfer type.
     *
     * @summary Get All Transfers
     */
    getAllTransfers(metadata: types.GetAllTransfersMetadataParam): Promise<FetchResponse<200, types.GetAllTransfersResponse200>>;
    /**
     * Returns all transfers for a collection by contract address.
     *
     * @summary Get All Transfers Of Collection
     */
    getTransfersByCollection(metadata: types.GetTransfersByCollectionMetadataParam): Promise<FetchResponse<200, types.GetTransfersByCollectionResponse200>>;
    /**
     * Returns all transfers for a NFT by contract address and token id.
     *
     * @summary Get All Transfers Of NFT
     */
    getTransfersByTokenId(metadata: types.GetTransfersByTokenIdMetadataParam): Promise<FetchResponse<200, types.GetTransfersByTokenIdResponse200>>;
    /**
     * Returns all transfers for an owner by wallet address.
     *
     * @summary Get All Transfers Of Owner
     */
    getTransfersByOwner(metadata: types.GetTransfersByOwnerMetadataParam): Promise<FetchResponse<200, types.GetTransfersByOwnerResponse200>>;
    /**
     * Returns list of owners with the most transfers.
     *
     * @summary Get Top Active Owners.
     */
    getTopActiveOwners(metadata: types.GetTopActiveOwnersMetadataParam): Promise<FetchResponse<200, types.GetTopActiveOwnersResponse200>>;
    /**
     * Returns all current owners for a collection by contract address.
     *
     * @summary Get All Current Owners Of Collection
     */
    getOwnersByCollection(metadata: types.GetOwnersByCollectionMetadataParam): Promise<FetchResponse<200, types.GetOwnersByCollectionResponse200>>;
    /**
     * Returns all current owners for a NFT by contract address and token id.
     *
     * @summary Get All Current Owners Of NFT.
     */
    getOwnersByTokenId(metadata: types.GetOwnersByTokenIdMetadataParam): Promise<FetchResponse<200, types.GetOwnersByTokenIdResponse200>>;
}
declare const createSDK: SDK;
export default createSDK;
