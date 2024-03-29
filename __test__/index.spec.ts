// Import your function here. Replace './yourFunctionFile' with the path to your Azure Function file.
import { HttpRequest, InvocationContext } from '@azure/functions';
import { httpHello6 } from '../src/functions/index';

describe('httpHello6 function', () => {
  let mockRequest: Partial<HttpRequest>;
  let mockContext: Partial<InvocationContext>;

  beforeEach(() => {
    mockRequest = {
      query: new URLSearchParams(),
      text: jest.fn().mockResolvedValue(''),
      url: 'https://example.com/api/test',
    };

    mockContext = {
      log: jest.fn(),
    };
  });

  it('should return "Hello, world!" when no name is provided', async () => {
    const result = await httpHello6(mockRequest as any, mockContext as any);
    expect(result).toEqual({ body: 'Hello, world!' });
  });

  it('should return "Hello, Alice!" when the name is provided in the query', async () => {
    mockRequest.query?.append('name', 'Alice');
    const result = await httpHello6(mockRequest as any, mockContext as any);
    expect(result).toEqual({ body: 'Hello, Alice!' });
  });

  it('should return "Hello, Bob!" when the name is provided in the body', async () => {
    (mockRequest.text as jest.MockedFunction<() => Promise<string>>).mockResolvedValueOnce('Bob');
    const result = await httpHello6(mockRequest as HttpRequest, mockContext as InvocationContext);
    expect(result).toEqual({ body: 'Hello, Bob!' });
  });
});
