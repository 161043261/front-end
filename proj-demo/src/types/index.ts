export interface ResponseData {
  code: number; // 0 as success, 1 as failed
  message: string;
  data: { [prop: string]: any };
}
