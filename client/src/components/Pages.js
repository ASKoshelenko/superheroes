import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

const Pages = observer(() => {
    const {superhero} = useContext(Context)
    const pageCount = Math.ceil(superhero.totalCount / superhero.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className="pagination">
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={superhero.page === page}
                    onClick={() => superhero.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;
