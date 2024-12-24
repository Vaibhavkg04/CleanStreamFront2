import React from "react";
import { useNavigate } from "react-router-dom";
import i1 from "../assets/images/landing.png";
import i2 from "../assets/images/ing2.jpeg";

import "./landing.css";
import NavBar from "../Components/navbar";

function Landing() {
	const navigate = useNavigate();

	const handleLoginClick = () => {
		navigate("/login");
	};

	return (
		<div className="relative min-h-screen">
			<NavBar />
			<div className="relative">
				<img src={i1} alt="" className="w-full h-screen object-cover" />
				<div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white">
					<h1 className="heading w-4/5 text-4xl mt-40 mb-28 font-bold px-4">
						Waste management is intended to reduce the adverse effects of waste
						on human health and the environment.
					</h1>
					<div className="hidden lg:flex gap-12 lg:gap-32 flex-wrap justify-center items-center">
						<div className="flex items-center justify-center">
							<div className="w-52 p-4 bg-slate-200 rounded-lg shadow-md border-2 border-black transition-transform transform hover:-translate-y-4 hover:shadow-xl">
								<h2 className="text-2xl font-semibold text-gray-800">Worker</h2>
								<img
									src="https://cdn-icons-png.flaticon.com/512/1785/1785751.png"
									alt="Worker Icon"
									className="h-36 mx-auto"
								/>
								<div className="flex items-center justify-center">
									<button
										onClick={handleLoginClick}
										className="px-4 py-2 text-lg font-semibold text-white bg-gray-800 rounded-lg transition-all transform hover:bg-gray-700 hover:-translate-y-0.5"
									>
										Login
									</button>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-center">
							<div className="w-52 p-4 bg-slate-200 rounded-lg shadow-md border-2 border-black transition-transform transform hover:-translate-y-3 hover:shadow-xl">
								<h2 className="text-2xl font-semibold text-gray-800">User</h2>
								<img
									src="https://cdn-icons-png.flaticon.com/512/4018/4018431.png"
									alt="User Icon"
									className="h-36 mx-auto"
								/>
								<div className="flex items-center justify-center">
									<button
										onClick={handleLoginClick}
										className="px-4 py-2 text-lg font-semibold text-white bg-gray-800 rounded-lg transition-all transform hover:bg-gray-700 hover:-translate-y-0.5"
									>
										Login
									</button>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-center">
							<div className="w-52 p-4 bg-slate-200 rounded-lg shadow-md border-2 border-black transition-transform transform hover:-translate-y-4 hover:shadow-xl">
								<h2 className="text-2xl font-semibold text-gray-800">RagMan</h2>
								<img
									src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
									alt="RagMan Icon"
									className="h-36 mx-auto"
								/>
								<div className="flex items-center justify-center">
									<button
										onClick={handleLoginClick}
										className="px-4 py-2 text-lg font-semibold text-white bg-gray-800 rounded-lg transition-all transform hover:bg-gray-700 hover:-translate-y-0.5"
									>
										Login
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="relative block sm:block md:block lg:hidden xl:hidden 2xl:hidden">
				<img src={i2} alt="" className="w-full h-screen object-cover" />
				<div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white">
					<div className="flex space items-center justify-center">
						<div className="w-52 p-4 mb-8 bg-slate-200 rounded-lg shadow-md border-2 border-black transition-transform transform hover:-translate-y-4 hover:shadow-xl">
							<h2 className="text-2xl font-semibold text-gray-800">Worker</h2>
							<img
								src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABX1BMVEX/////xzj5ycDr5u/yTAASEzHh2uf/sSJkbngAADH2tKj/yjjv6vMAAB3/syIAACAACTG8gyjXliUAACXDmTUAACgTFDDRQwkAACK1sb0ADzKin66Afo7/zTj4+Pnbqze5PBYNDzRGT1isrLIAABebfoNyWjOQcjQKCi2BZjTBPxIeHDHNx9TW0tsAABQSEifDiCFpVDPruDdYRzKacnXr6+0eHzo3PE++vsWTk534wrhOVmQwMElub31vTy3tpSTIyMx1WGJaWW1INi5FRln/vS+dbym7kzXNoTawj5BgT1vsraP3vbPVnJaRdny1hoVWX2xjYXQAAAk4Gyw8MjImJ0AlITGaejR5ViswKTFMPjKXaypbSTKqhjU1Nkx1dYRSPk68mJdxVVw9METmurTYrqqIZmuofHzDj4w3PkqWen8jHB6gNhl+LCNsKCIlFjBXIiffRwinOBdJHyqQMhwy9YixAAAOt0lEQVR4nO2d/XvSyBbHZXMHRAhE42AKlNol6qwF1NakyUoV2bhqtVqqcXe9Suutdl/u6nXX/v/PPZPwEpLw/pLBzffxhxaKzIdz5pwzyczhzJlQoUKFChUqVKhQoUKFChUqVKhQlgqDFPTgZqFadb2/UDHo4c1A+xLqL7KuBD2+qVW4gxGKtyVQqs5vBCFh+QnP1DHKXO1IQORl55eX5CshJBuribbiKH6t/dvqd/GvhzDSlkXY+pkSLv88LO/AzMv2J8T6UiMWanUsAmG8D+EtCDySucSMNYPHVkoY4KXwrIT05Uz8hXwa+AQhM5gQUgZJG+WgRzuByk2e8m3d3MoOItz47hVgYlkPerxjS69AOo9vXUilBhNmNzev0TqAby6ZGfMVMGD8x1QqFhtGmFhde2mZUQt60OOoDh4a/+Ee8MVSW8IQwkgi8RMt4CrLU4UXDCi24z8/oIAPIsMJ4afNX8CMlVzQIx9RSpPW2j9SvlgqMhJhJBF5DYj8csSbgoFh+XC+DTgaISC+AURpKRx1R0QE3bQAY5GRCQHxahxeuAQRVU+Di9oWhEk4OiEIEHGT+RJOo4D/tgFTkbEIE5uvBSTWgyYYIgUTFL8bi3V8dBwbJtY2CEozHm0aIhJexxw+Gom8GURIyGakq9WLNGcwPRW1A1gM3ks5TZj4Lh6/5U+YeBiPv4k4lbgG0aYZNMUAFSAYthJhx4SRyMOHDgYnYWR17WIk0YMY+YUgmeGUkeMR+SXWMwupYZwQPYS9T1kPgJ8SgdnlYoHWMhdaJky5B+9H6FXiVpzhYAOpULjbAuw66ZiEm2DEdUaNWDBhFrbDTKwPwTDCyCoEG57RmbgiI+FNyjMNXYRC/KeBhJYRt9k04g5G8ZtDnDTxduvWpv8M7RjxjYDkWtAwflIERDY6JuxDGFn1xk/3h/AwjsTDoGn8VOS7ubA/4QhKIEKqLBbg4KTZC8Om4Sii5arMYOmmVAl51QGchpC6qcRgSizzjmTYWjhNSLgmILwfNI9XdBqenwlhZPUVIQyuhA9F5zScjpAu9tkjvIPJq84snI6QTkT2MmLBINkfuoFmimQBhI+g+maucINQKmylZmRDCDViPmgitxRY1t19kOooMYVWNzMIM1bVKIq2DsniQldrg/XIqYtdPbT0NoOIodUYCjb6uswjerNpVqK3hnlZZeZuVPGADNj2NLmIyIoVqwRlZ2Y+pyGZWQlDrn99fvZiKGWItCKdue6xRhibtULCReofQviVz8Psmwsz102GCFUCRenMlWUoH9Ib23OpaSRWappCU05LLdGB4TEk9goMh3iQDOIJKyYERC3Xki4icnS7rSsD9fjKY5fevdvNIknTtJolLmguX1UQPjnX0vffjK0TjCpBIwwREP5nCsL77BPKUxPKQSMMEeTGDuH4gN/sYoSDRhgiAWV3pyNcDxphiBDJHk1DmCVq0AhDZALhk8kJjwipBo0wRE1CjqcgPCZMbxiiMqYifA+ERtAIQ1THUxFWCWZ9c2IDI3MKQpPgRtAIQ7SDkToFoYrwTtAIQ3QoItQmHL+meb/O4C0Zl/JQ1ExBKCCRwTv4PdIlJExBiJnco9AjIMRtwqfjE4rsH0goppG4NzHhB4mdq0/9pIENf5u4MH0HNmTmllofUcJfJyZ8vASEZdFxGWNswmcYiQzu9+pRATuWwGMHU7oAZnNrqUNVR+k9bqihhTfriyerbBP2JnTTD5jRnaU90tII356Q8ApmP9DQjTWoex1jTDc9yiLEyoX8ATLIpG76QUCY9fUvFVQ1E+YLyBXMVzRUikm6S8Rx3BQWh8RcAie1i+9JjPhsCRYWthSVoMz41fcHhIi6FCa07pji3bGNCPUMu0e6XFKapFt+j2rExxixuLm7j+hxZ7w3lhGhnEFp9rN9R4cSzKmx/BTmrsR+wdYV7auAj8bw0yP4e4P5VYVTnES6iMMXUQCImNlMOqJqBzAV23ehRgGs1IIe8riiB9fx8d4IiB+OAfCgFvSAx5d2QFCWPB+K+DibReRgicJoVzWRgBnvPxk4F9/fxzBjcS3owU6mcpUimr8+6R9RH5vgoWTZumB1VbZ2p+Fjm9FjxvdXjrG1y39pAa0a3GY8+e2Jy4zvP5wci/bTy1Jv+4gSmghbm/nM3ZPne0/e23r3bNcUqf0wMZedEN/f2yVW98QsxqKAzGMzI0gittwTk909iDTLTnju3N6JahNRlyTtHzBWTyBdfhWEoN9OjgW6nTRLRX8QYGpaIfZrIaTae377/u7R0dHu/dvP20ur779ZVkKlXK5pWlFFDkKvaP64j5Fa1LRaubwsnIqmN5owyURJkkTk2Mfny2ddvEDW38JUbTZ0jW3OgnbYRJKEnYf1upfdevS0lf+fYefWdSxJpHmoMbpQLNR2zLTYhiO2/BGfdsobCkg6sl8pps3DGnuQSm5bonh0s33GNJvb279TWZXpbX+6NuD2HUuGsV3NwKsFApDSdo4td1X0aprQfvIbWzdAv3/bUZN0rfj0qas0fSZSwLMd7VPANxu0Jy1JVxnqEV3QEeVD5Ifz91LneUD8thdRvH3ODUf1h9QLeNZEtMfS5tvX1v+WZqZHdK3Jg2NhlEnfTKViqbv8Df6VC1G64rNy+iPtAtwmSHgZiSRWH9Guu/B/8tu1oOHO0KbWtCeyaDbwDZ72UErd+698g+/66T4dOEp7ET2Ad+hXJawl7KZtuGFSF67kAzej0qRXf6XD6ApvE8bAT+WOn+63bIPSfwwDPKuCj1pdsighv8JZ/cDTzYBPzhTpKGSjxHUJY6mfW36673A/N6IXELxZeG13jbAIk8mSIcOnF+wtRdrUmsg5Lhp1EMZsP913jN5CfOaMoh5A8FGCWk2FbUIumczRGVAJcD/mDg8zsFqKRnsJUzf5GxniJLQQxS6iO02AIHrG3646bchxXLJUhXjLB7WptlCHd5ca0aibMJa6BsHQPNsX0QcQSoP4rXZvkw4hl+Qa9E3qwcSbOowTQoyXMBXZfCkgYngQ8TNHJdPzLPXRjU7T5C4heGoeEIPpvbsjQRLMR72ED+weOqjXT7uIPoC0mIk/THhtSBl1qAalABw1D3MQ56IeQrv3TsLrp21H9XFRy0evdlsm9xByyRx8JPzCw00RoqikdwGjOZuw0z6J+um2FxHvei141nD6qIcQrCgtvut+GTKVlHcAtmzYAUys0crrjheReAH36RdFXHT0hHYRcsk8JJfFtuErgFt1oqjDho5mT7QPKVLPehE9gFbBfdXR8tNDyCXppK8uMqDSN2z2AFo2dNjBGqavtRBxWdZwmdCHkOOai70LXoNJKJc8hIKH0E2TsS8A9ARZi3oYYZJOi8XdRC3AByrnom5C7zCRy09NWrx5HkQjEHLJlQq4zaL8VOdhccO5CHNpX0LS7J2F0gq9SuF6cARCLtnAC/v+C2UdVgEuH+1jQ+L0U7r+43NJ+ENHvXPHDq8jEEaFhX2XIJRRou42IedHSOow+Ex7vmVokQcrBlqGoTY3LAoxhJrhhLS2WdDOPkUlpOq2YDTpRyjlGiJE+c4kxIY1VFrQqh0fxfWcNAohx1XJYm4AQIEhusNMlPMlTOfKwGX7KUQnopasJVG0iVvc1qKw5DeFfQiT8EkswoiK6WfCfoR0VFZ2oEkPt9cLGiF2qqSOqydHJLSMuIAttlq6tx61AfsSJqmfmlbSAxaHNahp6R7GOjcyIX3ZAnb31TE4mwewP6Hlp4ZK13iOse5Q0xqWjyZHJyyrCzgIrSD6sY9OyNnZAf5Vo47VAmdg61Ge/sXIXgo5kcz9uEIxDeP2AvYnbNkLiaWeUrq8bt21qdM/GJ0Q3mTuvaPASas+TjqAkOPonpNKzluFISRExyMsz/+8foHOBB/AQYRJ7YDwh54EnpfJgX1BbWRCy03n3BmkJroWviMQAsL6js9od9b11tNA+Gg0QnrSoTZXwiIkXT8nHUgIgcVvuFzr0XFsWErP+1gNeIlZ8gEcTDhYYxBykHvm3HQBqgrDz4SLIuSMebd3wbAyDJIwuTPnRlKciETfQLMwwrw43y3vNQg0OT/AhRHS9UVtjoSa5KloFkwIbzPXg7SwsOBXvmrCYuCEJXm+CREI3ddJF0xYDglnTth5638I4apDj+w1/giyKm/XS9kkFG5dc+iqAAvc/CiqYyRs3XLoNWGUsPcLLgS6hhdHEd1i2tsHGrFKOEOxSpiZSAhlXWKVMPvnpQl1vVenWVYJL/9rNrocEoaEIWFIGBIuOaHrOs2iCXNzviRck5B4GChhXpzvlagzmLjujy6WMFlSCZlv4/28hLBRCoowWTbm3ktKQQRhdWXhhPZSWVMxmvtNYI2eAOLVRl7PlaJcNGq989wI21cBuNJKTm+o1nvPfavCCm+drxelNF+RTONQz62U6EhmTwgqayu5fL0qVmRess/vp1fmDUi7XcidQ6KEnvqk3xBUz+fxTAnFfL6u0tOzNlnriKm8mA4ahWKjig/kNH3vzuF6eiki+/HSTACvf8rSCyDdI/zUY+SKWG0UF7ZNuFBQakU9v2OoUoXvfsrZ7IvTaSGvf/ofXeO3PjeJl3lkwKwv1pRCEMdKCoqiaDkgXZftI8DZbObz9cnxLp2+sPGwmJaRsZPXV8qKEvgBvTOUtJw7NEQJ24aczFv/+vtzhvIRnMZ38sUyE2Q9KpR1Q0jbkF/G9da/LtveSTCP6oydcu5ROWcgiVgXzz6fXvprZOt9fEG/Kw+SgVovMoxnS8ltYxtSuPH5dOikpHTW9UNEJGKwj2errKtSK/AI2RefP/7py3np79NPXzKCHVqIJFX1peqmVMubrfBKPVYQMl8+np6e/gk6Pf346cuLDXjMvvZrdVGQq3ot6CGPL0XLqxW+nSzdF7U7KY+vmHlWO2GMIKWo19WKVRXgTnsh2gmDNj/hKxW1rq8sydQbqLKm64cNo4rESkWuVERUNRpWNg96YLNWAaRAIi8EUn+FChUqVKhQoUKFChUqVKhQoUKxrf8DgwtOL4LYam8AAAAASUVORK5CYII="
								alt="Worker Icon"
								className="h-36 mx-auto"
							/>
							<div className="flex items-center justify-center">
								<button
									onClick={handleLoginClick}
									className="px-4 py-2 text-lg font-semibold text-white bg-gray-800 rounded-lg transition-all transform hover:bg-gray-700 hover:-translate-y-0.5"
								>
									Login
								</button>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center">
						<div className="w-52 p-4 bg-slate-200 mb-8 rounded-lg shadow-md border-2 border-black transition-transform transform hover:-translate-y-3 hover:shadow-xl">
							<h2 className="text-2xl font-semibold text-gray-800">User</h2>
							<img
								src="https://cdn-icons-png.flaticon.com/512/4018/4018431.png"
								alt="User Icon"
								className="h-36 mx-auto"
							/>
							<div className="flex items-center justify-center">
								<button
									onClick={handleLoginClick}
									className="px-4 py-2 text-lg font-semibold text-white bg-gray-800 rounded-lg transition-all transform hover:bg-gray-700 hover:-translate-y-0.5"
								>
									Login
								</button>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center">
						<div className="w-52 p-4 bg-slate-200 rounded-lg shadow-md border-2 border-black transition-transform transform hover:-translate-y-4 hover:shadow-xl">
							<h2 className="text-2xl font-semibold text-gray-800">RagMan</h2>
							<img
								src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
								alt="RagMan Icon"
								className="h-36 mx-auto"
							/>
							<div className="flex items-center justify-center">
								<button
									onClick={handleLoginClick}
									className="px-4 py-2 text-lg font-semibold text-white bg-gray-800 rounded-lg transition-all transform hover:bg-gray-700 hover:-translate-y-0.5"
								>
									Login
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Landing;
