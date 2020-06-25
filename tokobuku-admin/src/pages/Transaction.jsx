import React, { Component } from 'react'
import Axios from 'axios'

export default class Transaction extends Component {

    render() {
        return (
            <div className='container-fluid'>
                <h1 style={{textAlign:'center'}}>Transaction List</h1>
                    
                    <div className="container">
                        <div className="row" style={{padding:30}}>
                            <div className='col-md'>
                                <select name='kagegori' id='kategori' style={{marginRight:30}}>
                                    <option value='0'>Status Transaksi</option>
                                    <option value='1'>Novel</option>
                                    <option value='2'>Politik & Sosial</option>
                                    <option value='3'>Bisnis & Ekonomi</option>
                                    <option value='4'>Komik</option>
                                    <option value='5'>Agama</option>
                                </select>
                            </div>
                        </div>
                    </div>


                
                    <div className="row justify-content-center" style={{textAlign:'center'}}>
                        <div className="table table-striped" style={{width:'auto'}}>
                            <thead>
                                <tr>
                                    <th scope='col'>No</th>
                                    <th scope='col'>Date</th>
                                    <th scope='col'>Total Transaction</th>
                                    <th scope='col'>Total Item</th>
                                    <th scope='col'>Status</th>
                                    <th scope='col'>Payment Proof</th>
                                    <th scope='col'>Update Status</th>  
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th scope='row'>1</th>
                                    <td>Rectoversoflkdsjfldsajf flkdsfjdsa;lfkjdsaf;dsafjds</td>
                                    <td>Rp 200.000</td>
                                    <td>2</td>
                                    <td>Waiting for Payment</td>
                                    <td><input type='button' className='btn btn-outline-success' value='see payment proof'/></td>
                                    <td>
                                        {/* if status >=3 munculin sebaliknya didisable */}
                                        <select disabled name='kagegori' id='kategori' style={{height:'40px'}}>
                                            <option value='0'>Status</option>
                                            <option value='1'>Novel</option>
                                            <option value='2'>Politik & Sosial</option>
                                            <option value='3'>Bisnis & Ekonomi</option>
                                            <option value='4'>Komik</option>
                                            <option value='5'>Agama</option>
                                        </select>
                                    </td>
                                </tr>

                                <tr>
                                    <th scope='row'>1</th>
                                    <td>Rectoversoflkdsjfldsajf flkdsfjdsa;lfkjdsaf;dsafjds</td>
                                    <td>Rp 200.000</td>
                                    <td>2</td>
                                    <td>Waiting for Payment</td>
                                    <td><input type='button' className='btn btn-outline-success' value='see payment proof'/></td>
                                    <td>
                                        {/* if status >=3 munculin sebaliknya didisable */}
                                        <select disabled name='kagegori' id='kategori' style={{height:'40px'}}>
                                            <option value='0'>Status</option>
                                            <option value='1'>Novel</option>
                                            <option value='2'>Politik & Sosial</option>
                                            <option value='3'>Bisnis & Ekonomi</option>
                                            <option value='4'>Komik</option>
                                            <option value='5'>Agama</option>
                                        </select>
                                    </td>
                                </tr>

                                <tr>
                                    <th scope='row'>1</th>
                                    <td>Rectoversoflkdsjfldsajf flkdsfjdsa;lfkjdsaf;dsafjds</td>
                                    <td>Rp 200.000</td>
                                    <td>2</td>
                                    <td>Waiting for Payment</td>
                                    <td><input type='button' className='btn btn-outline-success' value='see payment proof'/></td>
                                    <td>
                                        {/* if status >=3 munculin sebaliknya didisable */}
                                        <select disabled name='kagegori' id='kategori' style={{height:'40px'}}>
                                            <option value='0'>Status</option>
                                            <option value='1'>Novel</option>
                                            <option value='2'>Politik & Sosial</option>
                                            <option value='3'>Bisnis & Ekonomi</option>
                                            <option value='4'>Komik</option>
                                            <option value='5'>Agama</option>
                                        </select>
                                    </td>
                                </tr>

                                <tr>
                                    <th scope='row'>1</th>
                                    <td>Rectoversoflkdsjfldsajf flkdsfjdsa;lfkjdsaf;dsafjds</td>
                                    <td>Rp 200.000</td>
                                    <td>2</td>
                                    <td>Waiting for Payment</td>
                                    <td><input type='button' className='btn btn-outline-success' value='see payment proof'/></td>
                                    <td>
                                        {/* if status >=3 munculin sebaliknya didisable */}
                                        <select disabled name='kagegori' id='kategori' style={{height:'40px'}}>
                                            <option value='0'>Status</option>
                                            <option value='1'>Novel</option>
                                            <option value='2'>Politik & Sosial</option>
                                            <option value='3'>Bisnis & Ekonomi</option>
                                            <option value='4'>Komik</option>
                                            <option value='5'>Agama</option>
                                        </select>
                                    </td>
                                </tr>

                              
                            </tbody>

                            <div className='mt-5' style={{marginTop:'100px'}}>
                                <button className="btn btn-primary">Update Status</button>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
