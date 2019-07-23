import DetailContainer from '../DetailContainer';
import MovieList from '../MovieListContainer';
import { renderWithRedux } from '../../../../__mocks__';

describe('DetailContainer', () => {
  let wrap;
  const state = {
    movieDetail: {
      data: {},
    },
  };

  beforeEach(() => {
    wrap = renderWithRedux(DetailContainer, state);
  });

  describe('Quando montar o componente', () => {
    it('Deve chamar a action de requisição', () => {
      const action = wrap.store.getActions();
      expect(action.length).toEqual(1);
      expect(action[0]).toEqual({ type: 'MOVIE_DETAIL_REQUEST' });
    });
    it('Quando usuario selecionar um filme deve chamar a action', () => {
      wrap.store.clearActions();
      const MovieListInstance = wrap.getAllByType(MovieList);
      wrap.fireEvent.press(MovieListInstance[0], { id: '1234' });

      const action = wrap.store.getActions();

      expect(action.length).toEqual(2);
      expect(action[0].type).toEqual('SELECTED_MOVIE');
      expect(action[1]).toEqual({ type: 'MOVIE_DETAIL_REQUEST' });
    });
  });
});
