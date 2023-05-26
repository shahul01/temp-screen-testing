import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App.js';

test('test kungfu panda 1', async () => {
  const { container } = render(<App />);
  const expectedValue = {
    button: 'Kung Fu Panda 1',
    imageSrc: 'movie-thumbnail.png',
    imageAlt: 'movie-thumbnail',
    title: 'Kung Fu Panda 1',
    director: ' Mark,Osborne 1',
    casts: 'Jack Black 1, Jackie Chan 1',
    genre: 'Action 1, Comedy 1'
  };


  const btn = screen.getByText(expectedValue.button,{ selector: 'p'});
  fireEvent.click(btn);

  await waitFor(() => {

    const header = screen.getByRole('heading', {level: 1}).textContent;
    const image = screen.getByAltText(expectedValue.imageAlt)
    const title = screen.getByRole('heading', {level: 3}).textContent;
    const directorVal = container.getElementsByClassName('cast-crew-value')[0].textContent;
    const castElement = screen.getByText('Casts:');
    const castVal = Array.from(castElement.childNodes)
    .filter(node => node.nodeType !== Node.TEXT_NODE)
    .map(node => node.textContent.trim())
    .join('');

    const genreElement = screen.getByText('Genre:');
    const genreVal = Array.from(genreElement.childNodes)
    .filter(node => node.nodeType !== Node.TEXT_NODE)
    .map(node => node.textContent.trim())
    .join('');

    expect(header).toEqual(expectedValue.title);
    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', expectedValue.imageSrc);
    expect(title).toEqual(expectedValue.title);
    expect(directorVal).toEqual(expectedValue.director);
    expect(castVal).toEqual(expectedValue.casts);
    expect(genreVal).toEqual(expectedValue.genre);

  });

});

test('test kungfu panda 2', async () => {
  const { container } = render(<App />);
  const expectedValue = {
    button: 'Kung Fu Panda 2',
    imageSrc: 'movie-thumbnail.png',
    imageAlt: 'movie-thumbnail',
    title: 'Kung Fu Panda  2',
    director: ' Mark,Osborne 2',
    casts: 'Jack Black 2',
    genre: 'Action 2'
  };

  const btn = screen.getByText(expectedValue.button,{ selector: 'p'});
  fireEvent.click(btn);

  await waitFor(() => {

    const header = screen.getByRole('heading', {level: 1}).textContent;
    const image = screen.getByAltText(expectedValue.imageAlt)
    const title = screen.getByRole('heading', {level: 3}).textContent;
    const directorVal = container.getElementsByClassName('cast-crew-value')[0].textContent;
    const castElement = screen.getByText('Casts:');
    const castVal = Array.from(castElement.childNodes)
    .filter(node => node.nodeType !== Node.TEXT_NODE)
    .map(node => node.textContent.trim())
    .join('');

    const genreElement = screen.getByText('Genre:');
    const genreVal = Array.from(genreElement.childNodes)
    .filter(node => node.nodeType !== Node.TEXT_NODE)
    .map(node => node.textContent.trim())
    .join('');

    expect(header).toEqual(expectedValue.title);
    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', expectedValue.imageSrc);
    expect(title).toEqual(expectedValue.title);
    expect(directorVal).toEqual(expectedValue.director);
    expect(castVal).toEqual(expectedValue.casts);
    expect(genreVal).toEqual(expectedValue.genre);

  });

});

test('test kungfu panda 3', async () => {
  const { container } = render(<App />);
  const expectedValue = {
    button: 'Kung Fu Panda 3',
    imageSrc: 'movie-thumbnail.png',
    imageAlt: 'movie-thumbnail',
    title: 'Kung Fu Panda  3',
    director: ' Mark,Osborne 3',
    casts: 'Jackie Chan 3',
    genre: 'Comedy 3'
  };

  const btn = screen.getByText(expectedValue.button,{ selector: 'p'});
  fireEvent.click(btn);

  await waitFor(() => {

    const header = screen.getByRole('heading', {level: 1}).textContent;
    const image = screen.getByAltText(expectedValue.imageAlt)
    const title = screen.getByRole('heading', {level: 3}).textContent;
    const directorVal = container.getElementsByClassName('cast-crew-value')[0].textContent;
    const castElement = screen.getByText('Casts:');
    const castVal = Array.from(castElement.childNodes)
    .filter(node => node.nodeType !== Node.TEXT_NODE)
    .map(node => node.textContent.trim())
    .join('');

    const genreElement = screen.getByText('Genre:');
    const genreVal = Array.from(genreElement.childNodes)
    .filter(node => node.nodeType !== Node.TEXT_NODE)
    .map(node => node.textContent.trim())
    .join('');

    expect(header).toEqual(expectedValue.title);
    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', expectedValue.imageSrc);
    expect(title).toEqual(expectedValue.title);
    expect(directorVal).toEqual(expectedValue.director);
    expect(castVal).toEqual(expectedValue.casts);
    expect(genreVal).toEqual(expectedValue.genre);

  });

});
