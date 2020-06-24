import React from 'react'
import Axios from 'axios'

class Payment extends React.Component{  

    render(){
        return(
            <div className="container-fluid p-5">
                <h1 style={{textAlign:'center'}}>Payment Detail</h1>

                <div className="row my-5">
                    <div className='col-md'>
                        <div className="table table-striped" style={{width:'auto'}}>
                            <thead>
                                <tr>
                                    <th scope='col'>No</th>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Price</th>
                                    <th scope='col'>Qty</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th scope='row'>1</th>
                                    <td>Rectoversoflkdsjfldsajf flkdsfjdsa;lfkjdsaf;dsafjds</td>
                                    <td>Rp 200.000</td>
                                    <td>2</td>
                                </tr>

                                <tr>
                                    <th scope='row'>1</th>
                                    <td>Rectoversoflkdsjfldsajf flkdsfjdsa;lfkjdsaf;dsafjds</td>
                                    <td>Rp 200.000</td>
                                    <td>2</td>
                                </tr>

                                <tr>
                                    <th scope='row'>1</th>
                                    <td>Rectoversoflkdsjfldsajf flkdsfjdfsfadfasffdsfjlkjlkjlkjlkjl</td>
                                    <td>Rp 200.000</td>
                                    <td>2</td>
                                </tr>

                                <tr>
                                    <th scope='row'>1</th>
                                    <td>Rectoversoflkdsjfldsajf flkdsfjdsa;lfkjdsaf;dsafjds</td>
                                    <td>Rp 200.000</td>
                                    <td>2</td>
                                </tr>
                            </tbody>

                            <h5 className='mt-3' style={{marginTop:50}}>Note : </h5>
                            <textarea className='input-register form-control mt-2' ref='deskripsi' style={{height:'150px', marginBottom:20}} 
                            type='text' placeholder='note' />
                            
                            <div>
                                <span className='mt-5' style={{marginRight:20}}>
                                    <button className="btn btn-outline-primary">Approve</button>
                                </span>
                                <span className='mt-5'>
                                    <button className="btn btn-outline-danger">Reject</button>
                                </span>
                            </div>
                            
                        </div>
                    </div>


                    <div className='col-md' style={{height:'50vh', textAlign:'center', marginLeft: 30}}>
                        <div className="card">
                            <div className="card-header">
                                GRAND TOTAL Rp.300.000
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Nama Rekening Bank : Andi Setiawan</li>
                            </ul>
                        </div>
                        <div className="card h-100" style={{marginTop:30}}>
                            <img style={{objectFit:'contain', height:'100%'}} width='100%' src='https://ecs7.tokopedia.net/img/cache/700/product-1/2020/4/30/100764160/100764160_fe264180-dee5-40fb-96e2-123ca2474174_900_900' alt="broken"></img>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default Payment