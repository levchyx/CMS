import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import React, {lazy, Suspense} from "react";
import tabs from 'tabs.json'
import Layout from "layout/Layout";
import Loading from "layout/Loading";

const ElementWrapper = ({children}: {children: React.ReactNode}) => {
    return (
        <Layout>
            <Suspense
                fallback={<div className="m-auto"><Loading/></div>}
            >
                {children}
            </Suspense>
        </Layout>
    )
}

const defaultRoute = `/${tabs[0].id}`

//I decided to use TailwindCSS for quick styling of components

//Also IMHO I would rather use Vite than Webpack, it works much faster, and of course
//it's always interesting for to move forward using some new technologies

export function RouteProvider() {
    //In order to handle auto redirect I user Navigate from react-router-dom

    //For handling dynamic imports with lazy function I had to add '../' before the native path
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<Navigate to={defaultRoute} replace={true} />}/>
                {tabs.map(({id, path }) => {
                    const Component = lazy(() => import("../" + path))
                    return (
                        <Route
                            //Never use 'index' as key =)
                            key={id}
                            path={id}
                            element={
                                <ElementWrapper>
                                    <Component/>
                                </ElementWrapper>
                            }
                        />
                    )
                })}
            </Routes>
        </BrowserRouter>
    )
}