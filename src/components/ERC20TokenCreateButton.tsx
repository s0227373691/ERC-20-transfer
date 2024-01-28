import React from 'react'

const ERC20TokenCreateButton = ({ clickFunc }) => {
    return (
        <button
            className="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] text-red-500 hover:text-white focus:outline-none focus:ring active:text-opacity-75"
            onClick={clickFunc}
        >
            <span
                className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent"
            >
                Create
            </span>
        </button>
    )
}

export default ERC20TokenCreateButton