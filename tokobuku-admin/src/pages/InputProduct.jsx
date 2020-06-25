import React from 'react'


export default class PostProduct extends React.Component{

    // onAddProductBtnClick = () =>{
    //     var name = this.refs.namaProduk.value
    //     var price = this.refs.harga.value
    //     var stock = this.refs.stok.value
    //     var image = this.refs.img.value
    //     var descrip = this.refs.deskripsi.value

    //     var data = {
    //         name : name,
    //         price : Number(price),
    //         stock : Number(stock),
    //         img_url : image,
    //         deskripsi : descrip,
    //         id_penjual : Number(localStorage.getItem('id'))
    //     }

    //     if(name&&price&&stock&&image&&descrip){
    //         Axios.post(urlApi+'products', data)
    //         .then((res)=>{
    //             console.log(res)
    //             Swal.fire({
    //                 icon:'success',
    //                 title:'Update Berhasil',
    //                 timer:2000,
    //             })
    //             .then((res)=>{
    //                 window.location = './'
    //             })

    //         })
    //         .catch((err)=>{
    //             console.log(err)
    //         })
    //     }else{
    //         Swal.fire({
    //             icon:'info',
    //             title:'Data Harus Diisi Semua',
    //             showConfirmButton: false,
    //         })
            
    //     }

//==============================================================COBA CARA LOOPING===================================================================
        // var refs = ['name','price','stock','img_url','deskripsi']
        // var data = {id_penjual : localStorage.getItem('id')}

        // for(var i =0 ; i< refs.length ; i++){
        //     if(this.refs[refs[i]].value){
        //         data[refs[i]] = this.refs[refs[i]].type ==='number' ? Number(this.refs[refs[i]].value) : this.refs[refs[i]].value
        //     }else{
        //         return Swal.fire('Error')
        //     }
        
        // }
        // Axios.post( urlApi +'products', data)
        // .then((res) => {
        // console.log(res)
        // Swal.fire('Post','Post Succes','success')
        // window.location = '/'

        // })

        // .catch((err) => {
        // console.log(err)
        
        // })

    // }

    render(){
        return(
            <div className = 'row justify-content-center align-item-center'>
                <div className="col-md-5 card p-5 my-5 form-group" style={{borderRadius:'30px', backgroundColor:'#f5f5f5', boxShadow:'0px 4px 15px -1px rgba(0,0,0,0.75)'}}>
                    <h2>Post Your Product</h2>

                    <div className='mt-3'>Judul :</div>
                        <input style={{borderRadius:'3px', borderWidth:'0.1px', height:'40px'}} 
                        className='input-register mt-2' ref='title' type='text' placeholder='title' />
                    
                    <div className='mt-3'>Harga : </div>
                        <input style={{borderRadius:'3px', borderWidth:'0.1px', height:'40px'}} 
                        className='input-register mt-2' ref='price' type='number' placeholder='price' />
                    
                    <div className='mt-3'>Stok :</div>
                        <input style={{borderRadius:'3px', borderWidth:'0.1px', height:'40px'}} 
                        className='input-register mt-2' ref='stok' type='number' placeholder='stok' />
                    
                    <div className='mt-3'>Tahun Terbit : </div>
                        <input style={{borderRadius:'3px', borderWidth:'0.1px', height:'40px'}} 
                        className='input-register mt-2' ref='tahun' type='text' placeholder='tahun terbit' />
                    
                    <div className='mt-3'>Halaman : </div>
                        <input style={{borderRadius:'3px', borderWidth:'0.1px', height:'40px'}} 
                        className='input-register mt-2' ref='halaman' type='number' placeholder='halaman' />
                    
                    <div className='mt-3'>Bahasa : </div>
                        <input style={{borderRadius:'3px', borderWidth:'0.1px', height:'40px'}} 
                        className='input-register mt-2' ref='bahasa' type='text' placeholder='bahasa' />
                    
                    <div className='mt-3'>Pengarang : </div>
                        <input style={{borderRadius:'3px', borderWidth:'0.1px', height:'40px'}} 
                        className='input-register mt-2' ref='pengarang' type='text' placeholder='pengarang' />

                    <div className='mt-3'>Kategori : </div>
                    <select name='kagegori' id='kategori' style={{height:'40px'}}>
                        <option value='0'>Kategori</option>
                        <option value='1'>Novel</option>
                        <option value='2'>Politik & Sosial</option>
                        <option value='3'>Bisnis & Ekonomi</option>
                        <option value='4'>Komik</option>
                        <option value='5'>Agama</option>
                    </select>

                    <div className='mt-3'>Publisher : </div>
                    <select name='kagegori' id='kategori' style={{height:'40px'}}>
                        <option value='0'>Kategori</option>
                        <option value='1'>Novel</option>
                        <option value='2'>Politik & Sosial</option>
                        <option value='3'>Bisnis & Ekonomi</option>
                        <option value='4'>Komik</option>
                        <option value='5'>Agama</option>
                    </select>

                    <div className='mt-3'>Product Image : </div>
                    <input type='file' ref='images' accept='image/*' className='form-control mt-3'/>
                    
                    <div className='mt-3'>Deskripsi : </div>
                        <textarea className='input-register mt-2' ref='deskripsi' style={{height:'200px'}} 
                        maxLength='500' type='text' placeholder='description' />
                        

                    <span className='mt-5'>
                        <button className="btn btn-outline-primary">Submit</button>
                    </span>
                </div>
            </div>
        )
    }
}