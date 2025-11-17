
export class ApiService {

  public set setAccessToken(token: string) {
    this.accessToken = token;
  }

  private static _instance: ApiService;
  private accessToken: string | undefined;

  public static get instance()
  {
    return this._instance || (this._instance = new this());
  }

  public request = async <T>(
    url: string,
    type: 'GET' | 'POST' | 'PUT' | 'DELETE',
    body?: T,
    headers: HeadersInit | undefined = {},
  ) => {
    const response = await fetch(url, {
      method: type,
      headers: Object.assign(
        {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: `Bearer ${this.accessToken}`,
        }, headers),
      body: body ? JSON.stringify(body) : null
    });

    return await response.json()
  }
}
