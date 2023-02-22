export type Note = {
  id: number;
  content: string;
  updatedAt: number;
};
export type Folder = {
  id: number;
  name: string;
  notes: Note[];
};
