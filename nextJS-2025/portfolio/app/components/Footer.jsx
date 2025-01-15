
function Footer({ isDarkMode }) {
  return (
    <div className={`container mx-auto ${isDarkMode ? "bg-[#111111] test-white" : "bg-white text-black"}`}>
      <hr />
      <p className="text-center py-6 text-gray-lite dark:text-color-910 ">
        © 2025 All Rights Reserved by 
        <a className="hover:text-[#FA5252] duration-300 transition" href="https://themeforest.net/user/ib-themes" target="_blank" rel="noopener noreferrer">ib-themes</a>.</p>
    </div>
  )
}

export default Footer;
