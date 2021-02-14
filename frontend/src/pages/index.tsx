import styles from './index.less';
import {ChangeEvent, useEffect, useState} from "react";
import {request} from "@@/plugin-request/request";

interface Product {
  id: number;
  name: string;
  price: number;
  imgurl: string;
}

export default function IndexPage() {
  // 商品列表
  const [products, setProducts] = useState<Product[]>([])
  // 查询信息
  const [keyword, setKeyword] = useState<string>("")

  // 调用函数  进行初始化

  useEffect(() => {
    fetchProductList().then(r => {
    });
  }, [])

  // 获取商品列表
  const fetchProductList = async (keyword: string = "") => {
    const result = await request("/api/products", {
      params: {
        keyword: keyword
      }
    })
    setProducts(result)
  }


  // 处理监听输入框的变化
  const searchInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }

  // 处理搜索按钮的点击事件
  const searchButtonClickHandler = () => {
    fetchProductList(keyword).then(r => {
    })
  }

  //
  return (
    <div>
      <div className={styles.searchBar}>
        <input onChange={searchInputChangeHandler} type="text" className={styles.searchInput} placeholder="Search"/>
        <button onClick={searchButtonClickHandler} className={styles.searchButton}>搜索</button>
      </div>
      <div className={styles.productList}>
        {
          products.map(item => {
            return (
              <div className={styles.productItem} key={item.id}>
                <img src={item.imgurl}
                     alt="" className={styles.productImage}/>
                <div className={styles.productInfo}>
                  <div className={styles.productTitle}>
                    {item.name}
                  </div>
                  <div className={styles.productPrice}>
                    {item.price}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
