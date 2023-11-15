type APIResponseType = {
  errorCode?: string | null;
  message: string;
  status: boolean;
  statusCode: number;
  data?: any;
};

export default APIResponseType;
