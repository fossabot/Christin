import {request} from "@@/plugin-request/request";

export const getColumnsList = async (modelName: string) =>
  request(`/dashboard/api/v2/get_columns/${modelName}`, {
    method: 'GET',
  });

export const getTableData = async (modelName: string, body: any) =>
  request(`/dashboard/api/v2/get_table_data`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {...body, 'model': modelName},
  });
