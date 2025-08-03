import React from 'react'

let getPages = (current, totalPage) => {
    let pages = []
    if (totalPage <= 5) {
        for (let i = 1; i <= totalPage; i++) {
            pages.push(i)
        }
    } else {
        if (current <= 3) {
            pages.push(1, 2, 3, '...', totalPage)
        } else if (current >= totalPage - 2) {
            pages.push(1, '...', totalPage - 2, totalPage - 1, totalPage)
        } else {
            pages.push(1, '...', current - 1, current, current + 1, '...', totalPage)
        }
    }

    return pages
}

const Pagination = ({ pageHandler, page, dynamicPage }) => {
    return (
        <>
            <div className='flex items-center justify-center gap-4 mt-10'>
                <button
                    disabled={page === 1}
                    className={`${page === 1 ? 'bg-red-400' : 'bg-red-500'} text-white px-4 py-1 rounded-lg cursor-pointer`}
                    onClick={() => pageHandler(page - 1)}
                >
                    Prev
                </button>
                {
                    getPages(page, dynamicPage)?.map((item, index) => {
                        return (
                            <span
                                key={index}
                                className={`${item === page ? 'font-semibold text-red-500' : 'text-black'} cursor-pointer`}
                                onClick={() => typeof item === 'number' && pageHandler(item)}
                            >
                                {item}
                            </span>
                        )
                    })
                }
                <button
                    disabled={page === dynamicPage}
                    className={`${page === dynamicPage ? 'bg-red-400' : 'bg-red-500'} text-white px-4 py-1 rounded-lg cursor-pointer`}
                    onClick={() => pageHandler(page + 1)}
                >
                    Next
                </button>
            </div>
        </>
    )
}

export default Pagination