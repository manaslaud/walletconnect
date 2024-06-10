import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';
class SDK {
    constructor() {
        this.spec = Oas.init(definition);
        this.core = new APICore(this.spec, 'blockspan/1.0.0 (api/6.1.1)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config) {
        this.core.setConfig(config);
    }
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
    auth(...values) {
        this.core.setAuth(...values);
        return this;
    }
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
    server(url, variables = {}) {
        this.core.setServer(url, variables);
    }
    /**
     * Returns recently created or all historical collections. Filter by token type.
     *
     * @summary Get All Collections
     */
    getAllCollections(metadata) {
        return this.core.fetch('/collections', 'get', metadata);
    }
    /**
     * Returns collection info by contract address.
     *
     * @summary Get Single Collection
     */
    getCollection(metadata) {
        return this.core.fetch('/collections/contract/{contract_address}', 'get', metadata);
    }
    /**
     * Returns all currently owned collections by owner's wallet address.
     *
     * @summary Get All Collections Of Owner
     */
    getCollectionsByOwner(metadata) {
        return this.core.fetch('/collections/owner/{owner_address}', 'get', metadata);
    }
    /**
     * Sales pricing summary for given contract_address by various periods
     *
     * @summary Get Collection Price Summary
     */
    getCollectionPriceSummary(metadata) {
        return this.core.fetch('/collections/pricesummary/contract/{contract_address}', 'get', metadata);
    }
    /**
     * Sales pricing history for given contract_address by timeframe and binSize
     *
     * @summary Get Collection Price History
     */
    getCollectionPriceHistory(metadata) {
        return this.core.fetch('/collections/pricehistory/contract/{contract_address}', 'get', metadata);
    }
    /**
     * Returns the wallet address for a given ENS name or a status 404 if the name is not
     * found.
     *
     * @summary Get Address Of ENS Name
     */
    getAddressOfENSName(metadata) {
        return this.core.fetch('/ens/name/search/', 'get', metadata);
    }
    /**
     * Returns an array of ENS names for a comma-separated list of wallet addresses. If no
     * match is found, an empty string is returned.
     *
     * @summary Get ENS Names Of Addresses
     */
    getENSNamesOfAddresses(metadata) {
        return this.core.fetch('/ens/addresses/search/', 'get', metadata);
    }
    /**
     * Returns recent updated exchange collections.
     *
     * @summary Get All Exchange Collections
     */
    getAllExchangeCollections(metadata) {
        return this.core.fetch('/exchanges/collections', 'get', metadata);
    }
    /**
     * Returns exchange collection info by exchange key.
     *
     * @summary Get Single Exchange Collection
     */
    getExchangeCollection(metadata) {
        return this.core.fetch('/exchanges/collections/key/{key}', 'get', metadata);
    }
    /**
     * Returns top exchange collections ranked by specified metric.
     *
     * @summary Get Exchange Collections By Ranking
     */
    getExchangeCollectionsRanking(metadata) {
        return this.core.fetch('/exchanges/collectionsranking', 'get', metadata);
    }
    /**
     * Searches for exchange collections by specified criteria.
     *
     * @summary Find Exchange Collections
     */
    findExchangeCollections(metadata) {
        return this.core.fetch('/exchanges/collections/search', 'get', metadata);
    }
    /**
     * Submits a request to refresh NFT Metadata by contract address and token id.
     *
     * @summary Refresh NFT Metadata
     */
    refreshNFTMetadata(metadata) {
        return this.core.fetch('/refresh/contract/{contract_address}/token/{token_id}', 'put', metadata);
    }
    /**
     * Submits a request to refresh NFT Metadata for entire collection.
     *
     * @summary Refresh Collection Metadata
     */
    refreshCollectionMetadata(metadata) {
        return this.core.fetch('/refresh/contract/{contract_address}', 'put', metadata);
    }
    /**
     * Submits a request to refresh NFT Metadata for all tokens owned by an address.
     *
     * @summary Refresh Metadata of Owner's Tokens
     */
    refreshOwnerMetadata(metadata) {
        return this.core.fetch('/refresh/owner/{owner_address}', 'put', metadata);
    }
    /**
     * Returns recently created NFTs. Filter by token type.
     *
     * @summary Get All NFTs
     */
    getAllNFTs(metadata) {
        return this.core.fetch('/nfts', 'get', metadata);
    }
    /**
     * Returns NFTs across the chain in descending order by price in USD
     *
     * @summary Get Top NFTs
     */
    getTopNFTs(metadata) {
        return this.core.fetch('/nfts/topnfts', 'get', metadata);
    }
    /**
     * Returns nft transfer history over given timeframe
     *
     * @summary Get NFT history
     */
    getNftHistory(metadata) {
        return this.core.fetch('/nfts/nfthistory', 'get', metadata);
    }
    /**
     * Returns all NFTs with Metadata for a given collection (contract address).
     *
     * @summary Get All NFTs Of Collection
     */
    getNFTsByCollection(metadata) {
        return this.core.fetch('/nfts/contract/{contract_address}', 'get', metadata);
    }
    /**
     * Returns a NFT with Metadata by contract address and token id.
     *
     * @summary Get Single NFT
     */
    getNFTMetadata(metadata) {
        return this.core.fetch('/nfts/contract/{contract_address}/token/{token_id}', 'get', metadata);
    }
    /**
     * Returns all currently owned NFTs by owner's wallet address.
     *
     * @summary Get All NFTs Of Owner
     */
    getNFTsByOwner(metadata) {
        return this.core.fetch('/nfts/owner/{owner_address}', 'get', metadata);
    }
    /**
     * Uses fuzzy matching to discover NFT collections.
     *
     * @summary Find NFTs
     */
    searchNFTs(metadata) {
        return this.core.fetch('/nfts/search', 'get', metadata);
    }
    /**
     * Returns recently created transfers. Filter by token type and transfer type.
     *
     * @summary Get All Transfers
     */
    getAllTransfers(metadata) {
        return this.core.fetch('/transfers', 'get', metadata);
    }
    /**
     * Returns all transfers for a collection by contract address.
     *
     * @summary Get All Transfers Of Collection
     */
    getTransfersByCollection(metadata) {
        return this.core.fetch('/transfers/contract/{contract_address}', 'get', metadata);
    }
    /**
     * Returns all transfers for a NFT by contract address and token id.
     *
     * @summary Get All Transfers Of NFT
     */
    getTransfersByTokenId(metadata) {
        return this.core.fetch('/transfers/contract/{contract_address}/token/{token_id}', 'get', metadata);
    }
    /**
     * Returns all transfers for an owner by wallet address.
     *
     * @summary Get All Transfers Of Owner
     */
    getTransfersByOwner(metadata) {
        return this.core.fetch('/transfers/owner/{owner_address}', 'get', metadata);
    }
    /**
     * Returns list of owners with the most transfers.
     *
     * @summary Get Top Active Owners.
     */
    getTopActiveOwners(metadata) {
        return this.core.fetch('/owners/topactiveowners', 'get', metadata);
    }
    /**
     * Returns all current owners for a collection by contract address.
     *
     * @summary Get All Current Owners Of Collection
     */
    getOwnersByCollection(metadata) {
        return this.core.fetch('/owners/contract/{contract_address}', 'get', metadata);
    }
    /**
     * Returns all current owners for a NFT by contract address and token id.
     *
     * @summary Get All Current Owners Of NFT.
     */
    getOwnersByTokenId(metadata) {
        return this.core.fetch('/owners/contract/{contract_address}/token/{token_id}', 'get', metadata);
    }
}
const createSDK = (() => { return new SDK(); })();
export default createSDK;
