export interface IPost<T> {
  title: string;
  overview: string;
  content: T;
  _id: string;
  slug: {
    current: string;
  };
  _createdAt: string;
}
