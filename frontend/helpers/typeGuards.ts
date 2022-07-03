export const isObject = (value: unknown): value is object =>
  typeof value === 'object' && value !== null;

export const isNestResponse = (value: unknown): value is { data: any } =>
  isObject(value) && 'data' in value;

export const isQueryError = (
  value: unknown,
): value is { status: string; originalStatus: number; error: string } =>
  isObject(value) && 'error' in value;

export const isNestError = (
  value: unknown,
): value is { data: { message: string } } =>
  isNestResponse(value) && isObject(value.data) && 'message' in value.data;
