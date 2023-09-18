
export const FETCH_FEED = `
  query minsta_fetch_feed_minted_tokens(
    $accountId: String!
    $contractAddress: String
  ) {
    token: mb_views_nft_tokens(
      where: {
        minter: { _eq: $accountId }
        nft_contract_id: { _eq: $contractAddress }
        burned_timestamp: { _is_null: true }
        metadata_content_flag: { _is_null: true }
        nft_contract_content_flag: { _is_null: true }
      }
      order_by: { minted_timestamp: desc },
       offset: 1,
       limit: 11
    ) {
      id: token_id
      createdAt: minted_timestamp
      media
      title
      description
      metadata_id
    }
  }
`;

export const FETCH_FIRST_TOKEN = `
query minsta_fetch_firstToken($accountId: String!, $contractAddress: String) {
  token: mb_views_nft_tokens(where: {minter: {_eq: $accountId}, nft_contract_id: {_eq: $contractAddress}, 
    burned_timestamp: {_is_null: true}, metadata_content_flag: {_is_null: true}, nft_contract_content_flag: {_is_null: true}}, order_by: {minted_timestamp: desc}, limit: 1, offset: 0) {
    id: token_id
    createdAt: minted_timestamp
    media
    title
    description
    metadata_id
  }
}
`