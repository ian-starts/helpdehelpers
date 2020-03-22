import React from 'react';
import Link from "next/link";

const Header = (props) => {
    return (
        <div className="fixed top-0 pr-3 md:pr-10 lg:pr-10 xl:pr-10 bg-primary shadow-lg w-full shadow-">
            <div className="flex flex-row">
                <Link href={'#'}>
                    <a>
                        <div className="flex flex-1">
                            <h1 className="text-gray-800 px-4 py-5 self-center font-sans text-xl lg:text-3xl xl:text-3xl">#HelpDeHelpers</h1>
                        </div>
                    </a>
                </Link>
            </div>
            <style jsx>{`
              .menu--button-cta{
                @apply flex rounded-full bg-secondary px-5 py-2 ml-2
              }
              .menu--button-cta-text{
                @apply self-center text-gray-100 font-sans font-hairline text-lg
              }
              .menu--item{
                @apply text-gray-600 mx-5 font-sans font-hairline text-lg
              }
              @screen lg {
                .menu--item{
                   @apply text-2xl 
                 } 
                 .menu--button-cta-text{
                    @apply text-2xl
                 }
                 .menu--button-cta{
                    @apply ml-5
                  }
              }
              @screen xl {
                .menu--item{
                   @apply text-2xl 
                 } 
                 .menu--button-cta-text{
                    @apply text-2xl
                 }
                 .menu--button-cta{
                    @apply ml-5
                  }
              }
            `}</style>
        </div>
    )
};

export default Header;