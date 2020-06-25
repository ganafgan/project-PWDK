import React, { Component } from 'react'

export default class DashBoard extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <h2 style={{textAlign:'center', margin : 30}}>Dashboard</h2>
                <div className="container-fluid">
                    <div className="row" style={{margin:30}}>
                        {/* ============================ */}
                        <div className="col-sm">
                            <div className='card' style={{width: 'auto', height:'30vh'}}>
                                <div className="column">
                                    <h2 style={{textAlign:'center', margin : 20}}>Ringkasan Transaksi</h2>
                                    <div className="container-fluid">
                                        <div className="row justify-content-around" style={{textAlign:'center'}} >
                                            <div className="column">
                                                <h4>Pesanan Baru</h4>
                                                <div style={{fontSize:30}}>5</div>
                                                <div>see detail</div>
                                            </div>
                                            <div className="column">
                                                <h4>Diproses</h4>
                                                <div style={{fontSize:30}}>10</div>
                                                <div>see detail</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ================================ */}
                        <div className="col-sm">
                            <div className='card' style={{width: 'auto', height:'30vh'}}>
                                <div className="column">
                                    <h2 style={{textAlign:'center', margin : 20}}>Daftar Barang</h2>
                                    <div className="container-fluid">
                                        <div className="row justify-content-around" style={{textAlign:'center'}}>
                                            <div className="column">
                                                <h4>Dijual</h4>
                                                <div style={{fontSize:30}}>5</div>
                                                <div>see detail</div>
                                            </div>
                                            <div className="column">
                                                <h4>Stok Habis</h4>
                                                <div style={{fontSize:30}}>10</div>
                                                <div>see detail</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ================================== */}
                    </div>

                    <div style={{margin:60}}>
                        <h2 style={{textAlign:'center', margin:20}}>Top 10 Produk</h2>
                        <div className="container">
                            <ul className="list-group" style={{textAlign:'center'}}>
                                <li className='list-group-item'>Judul 1</li>
                                <li className='list-group-item'>judul 2</li>
                                <li className='list-group-item'>Judul 3</li>
                                <li className='list-group-item'>Produck</li>
                                <li className='list-group-item'>Produck</li>
                                <li className='list-group-item'>Produck</li>
                                <li className='list-group-item'>Produck</li>
                                <li className='list-group-item'>Produck</li>
                                <li className='list-group-item'>Produck</li>
                                <li className='list-group-item'>Produck</li>
                            </ul>

                        </div>
                    </div>


                </div>
            </div>
        )
    }
}
