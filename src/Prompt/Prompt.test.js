import {
  createMemoryRouter,
  RouterProvider,
} from 'react-router-dom';
import renderer from 'react-test-renderer';

import Prompt from './Prompt';


var mockedUsePrompt = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  unstable_usePrompt: mockedUsePrompt,
}));

describe('Prompt', () => {
  it('should call usePrompt with parameter', () => {
    const router = createMemoryRouter(
      [
        {
          path: '/',
          element: <Prompt when message="Are you sure?" />,
        },
      ],
      { initialEntries: ['/'] },
    );
    const component = renderer.create(
      <RouterProvider router={router} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(mockedUsePrompt).toHaveBeenCalledWith({ when: true, message: 'Are you sure?' });
  });
});