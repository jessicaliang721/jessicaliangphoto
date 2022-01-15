import {
    NavLink,
    Outlet,
    useLocation,
    useSearchParams
} from "react-router-dom";
import { getInvoices } from "../data";
import React from "react";

export default function Collections() {
    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams();

    function QueryNavLink({ to, ...props }) {
        let location = useLocation();
        return <NavLink to={to + location.search} {...props} />
    }

    return (
        <div style={{ display: "flex" }}>
            <nav
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem"
                }}
            >
                <input
                    value={searchParams.get("filter") || ""}
                    onChange={event => {
                        let filter = event.target.value;
                        if (filter) {
                            setSearchParams({ filter });
                        } else {
                            setSearchParams({});
                        }
                    }}
                />
                {invoices
                    .filter(invoice => {
                        let filter = searchParams.get("filter");
                        if (!filter) return true;
                        let name = invoice.name.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                    })
                    .map(invoice => (
                    <QueryNavLink
                        style={({ isActive }) => {
                            return {
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "red" : ""
                            };
                        }}
                        to={`/collections/${invoice.number}`}
                        key={invoice.number}
                    >
                        {invoice.name}
                    </QueryNavLink>
                ))}
            </nav>
            <Outlet />
        </div>
    );
}