import {reportsApi} from "@/api/index";

export const getReports = (filters: {client: string, dateFrom: string, dateTo: string}) => {
  if (filters.client) {
    filters.client = filters.client._id
  }
  const params = new URLSearchParams(filters);
  return reportsApi.get('', {
    params: params
  })
}