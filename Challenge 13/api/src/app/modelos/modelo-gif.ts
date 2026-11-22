export interface Gif {
  id: string;
  title: string;
  images: {
    fixed_height: {
      url: string;
      width: string;
      height: string;
    };
  };
}

export interface GiphySearchResponse {
  data: Gif[];
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
}