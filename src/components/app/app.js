import React, { Component } from 'react';
import { uuid } from 'uuidv4';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import PostStatusFilter from '../post-status-filter/';
import PostList from '../post-list/';
import PostAddForm from '../post-add-form/';
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: localStorage.getItem('myData')
        ? JSON.parse(localStorage.getItem('myData'))
        : [
            { label: 'Записывайте задачи!', like: false, important: false, id: uuid() },
            { label: 'Ставьте метки!', like: false, important: false, id: uuid() },
            {
              label: 'Фильтруйте и выполняйте поиск!',
              like: false,
              important: false,
              id: 3,},
          ],
      term: '',
      filter: 'all',
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);

    this.maxId = 4;
  }
  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, ...after];
      window.localStorage.setItem('myData', JSON.stringify(newArr));

      return {
        data: newArr,
      };
    });
  }
  addItem(body) {
    this.setState(({ data }) => {
      const newItem = {
        label: body,
        important: false,
        id: uuid(),
      };
      const newArr = [newItem, ...data];

      window.localStorage.setItem('myData', JSON.stringify(newArr));
      return {
        data: newArr,
      };
    });
  }

  onToggleImportant(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const old = data[index];
      const newItem = { ...old, important: !old.important };

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      window.localStorage.setItem('myData', JSON.stringify(newArr));

      return {
        data: newArr,
      };
    });
  }
  onToggleLiked(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const old = data[index];
      const newItem = { ...old, like: !old.like };

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      window.localStorage.setItem('myData', JSON.stringify(newArr));

      return {
        data: newArr,
      };
    });
  }

  searchPost(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  }

  filterPost(items, filter) {
    if (filter === 'like') {
      return items.filter((item) => item.like);
    }
    if (filter === 'important') {
      return items.filter((item) => item.important);
    } else {
      return items;
    }
  }

  onUpdateSearch(term) {
    this.setState({ term });
  }

  onFilterSelect(filter) {
    this.setState({ filter });
  }
  render() {
    const { data, term, filter } = this.state;
    const liked = data.filter((item) => item.like).length;
    const importants = data.filter((item) => item.important).length;
    const allPosts = data.length;
    const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
    return (
      <div className="app">
        <div className="headersearch">
          <AppHeader liked={liked} allPosts={allPosts} importants={importants} />

          <div className="search-panel">
            <SearchPanel onUpdateSearch={this.onUpdateSearch} />

            <PostStatusFilter onFilterSelect={this.onFilterSelect} filter={filter} />
          </div>
        </div>

        <PostAddForm onAdd={this.addItem} />
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
       
      </div>
    );
  }
}
