import s from './Pagination.module.css'
const Pagination = (props: any) => {
    const pagesCount = []
    for (let i = 1; i <= Math.ceil(props.totalTasksCount/props.pageSize); i++) {
        pagesCount.push(i);
     
    }

    return <div>
        <ul className='pagination'>
        <li onClick={() => {props.onPageChanged(props.currentPage-1)}} 
        className={`${props.currentPage<= 1 ? 'disabled' : 'waves-effect'}`}>
            <a href="#!"><i className="material-icons">chevron_left</i></a></li>
        {
        pagesCount.map((p)=> {
           
            return <li className={`${props.currentPage===p ? 'active' : 'waves-effect'}`} key={p}>
                <a onClick = {()=>{props.onPageChanged(p)}}>{p}</a>
            </li>
        })
        }


        <li onClick={() => {props.onPageChanged(props.currentPage+1)}} className={`${props.currentPage===pagesCount.length ? 'disabled' : 'waves-effect'}`}>
            <a href="#!"><i className="material-icons">chevron_right</i></a></li>
        </ul>
    </div>
}
export default Pagination