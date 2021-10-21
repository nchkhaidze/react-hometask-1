import { RootState } from '..';

export const allAuthorsSelector = (state: RootState) => state.authors.authors;
