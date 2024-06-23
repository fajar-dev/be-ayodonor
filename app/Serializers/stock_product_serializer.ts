import Stock from '#models/stock'
import StockProduct from '#models/stock_product'
import { DateTime } from 'luxon'

interface StockProductSerializerInterface {
  key: string
  name: string
  updatedAt: DateTime
  positive: object
  negative: object
}

interface StockSerializerInterface {
  id: number
  name: string
  province: string
  type: object
  product: any
}

export default class StockProductSerializer {
  static single(stock: Stock, product: StockProduct[]): StockSerializerInterface {
    return {
      id: stock.id,
      name: stock.namaudd,
      province: stock.provinsi,
      type: {
        a: stock.gol_A,
        b: stock.gol_B,
        ab: stock.gol_AB,
        o: stock.gol_O,
      },
      product: this.collection(product),
    }
  }

  static product(product: StockProduct): StockProductSerializerInterface {
    return {
      key: product.produkKey,
      name: product.nama,
      updatedAt: product.updateOn,
      positive: {
        a: product.aPos,
        b: product.bPos,
        o: product.oPos,
        ab: product.abPos,
      },
      negative: {
        a: product.aNeg,
        b: product.bNeg,
        o: product.oNeg,
        ab: product.abNeg,
      },
    }
  }

  static collection(stocks: StockProduct[]): StockProductSerializerInterface[] {
    return stocks.map((stock) => this.product(stock))
  }
}
