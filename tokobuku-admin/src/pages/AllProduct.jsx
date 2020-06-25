import React, { Component } from 'react'
import Axios from 'axios'

export default class AllProduct extends Component {

    render() {
        return (
            <div className='container-fluid'>
                <h1 style={{textAlign:'center'}}>Product List</h1>

                    <div className="row justify-content-center" style={{margin:30}}>
                        <div className='col-md-6'>
                            <select name='kagegori' id='kategori' style={{marginRight:30}}>
                                <option value='0'>Kategori</option>
                                <option value='1'>Novel</option>
                                <option value='2'>Politik & Sosial</option>
                                <option value='3'>Bisnis & Ekonomi</option>
                                <option value='4'>Komik</option>
                                <option value='5'>Agama</option>
                            </select>
                            <select name='kagegori' id='kategori'>
                                <option value='0'>Penerbit</option>
                                <option value='1'>Novel</option>
                                <option value='2'>Politik & Sosial</option>
                                <option value='3'>Bisnis & Ekonomi</option>
                                <option value='4'>Komik</option>
                                <option value='5'>Agama</option>
                            </select>
                        </div>
                        
                        <div className='col-md-3'>
                            <input type='text' className='form-control' placeholder='search author'/>
                        </div>
                    </div>


                
                    <div className="row justify-content-center" style={{textAlign:'center'}}>
                        <div className="table table-striped" style={{width:'auto'}}>
                            <thead>
                                <tr>
                                    <th scope='col'>No</th>
                                    <th scope='col'>Image</th>
                                    <th scope='col'>Judul</th>
                                    <th scope='col'>Pengarang</th>
                                    <th scope='col'>Penerbit</th>
                                    <th scope='col'>Kategori</th>
                                    <th scope='col'>Stock</th>
                                    <th scope='col'>Harga</th>
                                    <th scope='col'>Edit</th>
                                    <th scope='col'>Delete</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th scope='row'>1</th>
                                    <td><img src='https://ecs7.tokopedia.net/img/cache/700/product-1/2020/4/30/100764160/100764160_fe264180-dee5-40fb-96e2-123ca2474174_900_900' width='120px' alt=''/></td>
                                    <td>Rectoversoflkdsjfldsajf flkdsfjdsa;lfkjdsaf;dsafjds</td>
                                    <td>Dee Lestari</td>
                                    <td>Elexmedia Gramedia Pustaka</td>
                                    <td>Novel</td>
                                    <td>10</td>
                                    <td>Rp90.000</td>
                                    <td><input type='button' className='btn btn-outline-success' value='edit'/></td>
                                    <td><input type='button' className='btn btn-outline-danger' value='delete'/></td>
                                </tr>

                                <tr>
                                    <th scope='row'>2</th>
                                    <td><img src='https://ecs7.tokopedia.net/img/cache/700/product-1/2020/4/30/100764160/100764160_fe264180-dee5-40fb-96e2-123ca2474174_900_900' width='120px' alt=''/></td>
                                    <td>Rectoversoflkdsjfldsajf flkdsfjdsa;lfkjdsaf;dsafjds</td>
                                    <td>Dee Lestari</td>
                                    <td>Elexmedia Gramedia Pustaka</td>
                                    <td>Novel</td>
                                    <td>10</td>
                                    <td>Rp90.000</td>
                                    <td><input type='button' className='btn btn-outline-success' value='edit'/></td>
                                    <td><input type='button' className='btn btn-outline-danger' value='delete'/></td>
                                </tr>

                                <tr>
                                    <th scope='row'>3</th>
                                    <td><img src='https://ecs7.tokopedia.net/img/cache/700/product-1/2020/4/30/100764160/100764160_fe264180-dee5-40fb-96e2-123ca2474174_900_900' width='120px' alt=''/></td>
                                    <td>Rectoversodsafjds</td>
                                    <td>Dee Lestari</td>
                                    <td>Elexmedia Gramedia Pustaka</td>
                                    <td>Novel</td>
                                    <td>10</td>
                                    <td>Rp90.000</td>
                                    <td><input type='button' className='btn btn-outline-success' value='edit'/></td>
                                    <td><input type='button' className='btn btn-outline-danger' value='delete'/></td>
                                </tr>
                            </tbody>
                        </div>
                    </div>
            </div>
        )
    }
}
