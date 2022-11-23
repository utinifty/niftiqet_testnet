import { gql } from 'nuxt-graphql-request'

export const minterStores = gql`
  query FetchMinterStores($minter: String!) {
    mb_store_minters(where: { minter_id: { _eq: $minter } }) {
      minter_id
      nft_contracts {
        id
        name
      }
    }
  }
`

export const nftTokens = gql`
  query FetchNFTTokens($metadataId: String!) {
    mb_views_nft_tokens(where: { metadata_id: { _eq: $metadataId } }) {
      extra
      base_uri
      burned_receipt_id
      burned_timestamp
      description
      media
      media_hash
      metadata_content_flag
      mint_memo
      minted_receipt_id
      minted_timestamp
      minter
      owner
      reference
      reference_blob
      reference_hash
      royalties_percent
      token_id
      nft_contract_reference
      nft_contract_owner_id
      nft_contract_name
      nft_contract_is_mintbase
      nft_contract_id
      nft_contract_icon
      nft_contract_created_at
      nft_contract_content_flag
      title
      splits
      royalties
      copies
      listings {
        accepted_at
        currency
        kind
        price
        token_id
        market_id
        listed_by
        created_at
        approval_id
        accepted_offer_id
        offers {
          offer_price
          offered_at
          offered_by
          outbid_at
          receipt_id
          referral_amount
          referrer_id
          token_id
          withdrawn_at
        }
      }
    }
  }
`
export const nftTokensBySplits = gql`
  query FetchNFTTokens($metadataId: String!) {
    mb_views_nft_tokens(where: { splits: { _has_key: $metadataId } }) {
      extra
      base_uri
      burned_receipt_id
      burned_timestamp
      description
      media
      media_hash
      metadata_content_flag
      metadata_id
      mint_memo
      minted_receipt_id
      minted_timestamp
      minter
      owner
      reference
      reference_blob
      reference_hash
      royalties_percent
      token_id
      nft_contract_reference
      nft_contract_owner_id
      nft_contract_name
      nft_contract_is_mintbase
      nft_contract_id
      nft_contract_icon
      nft_contract_created_at
      nft_contract_content_flag
      title
      splits
      royalties
      copies
      listings {
        accepted_at
        currency
        kind
        price
        token_id
        market_id
        listed_by
        created_at
        approval_id
        accepted_offer_id
        offers {
          offer_price
          offered_at
          offered_by
          outbid_at
          receipt_id
          referral_amount
          referrer_id
          token_id
          withdrawn_at
        }
      }
    }
  }
`

export const nftMetadata = gql`
  query FetchNFTMetadata($ownerId: String!) {
    nft_metadata(where: { nft_contract: { owner_id: { _eq: $ownerId } } }) {
      base_uri
      description
      extra
      id
      media
      media_hash
      nft_contract {
        name
        owner_id
        id
        reference
      }
      reference_blob
      reference
      title
      nft_contract_id
      nft_contracts {
        reference
        owner_id
        name
      }
    }
  }
`

export const nftActivities = gql`
    query FetchNFTActivities($contractId: String!) {
    mb_views_nft_metadata(
    where: {nft_contract_id: {_eq: $contractId}}
  ) {
    extra
    media
    nft_contract_id
    nft_contract_name
    title
    description
    id
    nft_contract_icon
    nft_contract_created_at
    nft_contract_is_mintbase
    nft_contract_owner_id
    nft_contract_reference
    nft_contract_spec
    nft_contract_symbol
    reference_blob
  }
`

export const fetchMinters = gql`
  query FetchMinters($contractId: String!) {
    mb_store_minters(where: { nft_contract_id: { _eq: $contractId } }) {
      nft_contract {
        name
        owner_id
      }
      minter_id
    }
  }
`

export const fetchStore = gql`
  query FetchContract($contractId: String!) {
    mb_store_minters(where: { nft_contract_id: { _eq: $contractId } }) {
      nft_contract {
        name
        owner_id
      }
      minter_id
    }
  }
`

/*

export const fetchStore = gql`
  query FetchStore($storeId: String!, $limit: Int = 20, $offset: Int = 0) {
    store(where: { id: { _eq: $storeId } }) {
      id
      name
      symbol
      baseUri
      owner
      minters {
        account
        enabled
      }

      tokens(
        order_by: { thingId: asc }
        where: { storeId: { _eq: $storeId }, burnedAt: { _is_null: true }, thing: {metadata: {id: {_is_null: false}}} }
        limit: $limit
        offset: $offset
        distinct_on: thingId
      ) {
        id
        thingId
        list {
          acceptedOfferId
          autotransfer
          contractId
          createdAt
          id
          price
          ownerId
          thingId
        }
        thing {
          id
          metaId
          memo
          storeId
          tokens {
            minter
            id
            thingId
            ownerId
            royaltyPercent
            burnedAt
            splits {
              id
              percent
            }
            thing {
              storeId
              metadata {
                thing_id
                media
                id
                title
                type
                description
                extra
              }
            }
            list {
              acceptedOfferId
              autotransfer
              contractId
              createdAt
              id
              price
              ownerId
              thingId
            }
          }
          metadata {
            thing_id
            media
            id
            title
            type
            description
            extra
          }
        }
      }
    }
  }
`
*/
