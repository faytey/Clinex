export default function Footer () {
    return (
        <div className='footer mt-[4cm] pt-[2cm]'>
        <div className='lg:text-[200%] md:text-[200%] text-[150%] text-center text-[#060] font-[500]'>Copyright &copy; {new Date().getFullYear()}</div>
        <img src="images/thelogo.png" width="500" className='mx-[auto] mt-[-1cm]' />   
        </div>
    )
}