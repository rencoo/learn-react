import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { Select, Table } from "antd";
// import { uniqBy } from 'lodash';
import useAsync from "../custom/useAsync/useAsync";
import { fetchArticles, fetchCategories } from './mock';

// 直观的思路
/**
function BlogList() {
  // 获取文章列表...
  // 获取分类列表...
  // 组合文章数据和分类数据...
  // 根据选择的分类过滤文章...

  // 渲染 UI ...
}
*/

const endpoint = "https://myserver.com/api";

// 拆成hooks，能隔离的尽量隔离
const useArticles = () => {
  const { execute, data, loading, error } = useAsync(
    useCallback(async () => {
      // const res = await fetch(`${endpoint}/posts`);
      // return await res.json();
      return await fetchArticles();
    }, [])
  );

  // 执行异步调用
  useEffect(() => execute(), [execute]);

  // 返回语义化的数据结构 // 语义化!!!
  return {
    articles: data,
    articlesLoading: loading,
    articlesError: error
  };
};

const useCategories = () => {
  const { execute, data, loading, error } = useAsync(
    useCallback(async () => {
      // const res = await fetch(`${endpoint}/categories`);
      // return await res.json();
      return fetchCategories();
    }, [])
  );

  // 执行异步调用
  useEffect(() => execute(), [execute]);

  // 返回语义化的数据结构
  return {
    categories: data,
    categoriesLoading: loading,
    categoriesError: error,
  };
};

const useCombinedArticles = (articles, categories) => {
  return useMemo(() => { // 类似于vue computed计算属性
    // 如果没有文章或者分类数据则返回 null
    if (!articles || !categories) return null;
    return articles.map((article) => {
      return {
        ...article,
        category: categories.find(
          (c) => String(c.id) === String(article.categoryId)
        ), // 属于哪个分类 object
      };
    });
  }, [articles, categories]);
};

/**
 * @param {array} articles
 * @param {string} selectedCategory 数字字符串 id
 * @returns
 */
const useFilteredArticles = (articles, selectedCategory) => {
  // 实现安装分类过滤
  return useMemo(() => {
    if (!articles) return null;
    if (!selectedCategory) return articles;
    return articles.filter((article) => {
      // article?.categoryId
      return String(article.categoryId) === String(selectedCategory);
    });
  }, [articles, selectedCategory]);
};

const columns = [
  { dataIndex: 'title', title: 'Title' },
  { dataIndex: ['category', 'name'], title: 'Category' }, // 代表列需要取 category 字段（对象）的name属性
  // { dataIndex: 'category', title: 'Category' },
];

export default function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  // 获取文章列表
  const { articles, articlesError } = useArticles();
  // 获取分类列表
  const { categories, categoriesError } = useCategories();

  // 组合数据
  const combined = useCombinedArticles(articles, categories);
  // 实现过滤
  const result = useFilteredArticles(combined, selectedCategory);

  // 分类下拉框选项用于过滤
  const options = useMemo(() => {
    // uniqBy(categories, (c) => c.name)
    const arr =
      (categories || []).map((c) => ({
        // value: c.name,
        value: c.id,
        label: c.name,
      }));

    arr.unshift({ value: null, label: 'All' });

    return arr;
  }, [categories]);

  const selectStyle = {
    width: '200px',
  };

  return (
    <div>
      <Select
        value={selectedCategory}
        onChange={(value) => setSelectedCategory(value)}
        options={options}
        style={selectStyle}
        placeholder="Select a category"
        key='id'
      />
      <Table dataSource={result} columns={columns} rowKey='id'></Table>
    </div>
  );
}
