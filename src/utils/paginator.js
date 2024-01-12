const previousPage = function(prevPage, pagination, fetchMore) {
  if (prevPage < 1) {
    return false
  }
  pagination.currentPage = prevPage
  return true
}
/**
 * @param    {String} pagination    Default pagination data
 * @param    {String} paginationData    Pagination data from query(DB)
 * @param    {String} nextCount    Number of pages from current page
 **/
const nextPage = function(pagination, paginationData, nextCount) {
  nextCount = nextCount + paginationData.currentPage
  if (nextCount > paginationData.lastPage) {
    return paginationData.lastPage
  }
  pagination.currentPage = nextCount
  return true
}

/**
 * @param    {String} index    Counter in the current page
 * @param    {String} paginationData    Pagination data from query(DB)
 **/
const itemCounter = function(index, paginationData) {
  return index + 1 + paginationData?.perPage * (paginationData?.currentPage - 1)
}

export { previousPage, itemCounter, nextPage }
