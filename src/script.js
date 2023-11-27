/* <div class='flex flex-col gap-4'>
	<div class='flex justify-between items-center'>
		<p class='text-2xl w-full font-semibold'>Star Wars</p>
		<div class='flex w-full justify-end gap-3 items-center'>
			<a href='' class='text-blue-600 text-lg font-medium'>
				Ver todo
			</a>
			<img class='' src='/images/svg/arrow_back.svg' />
		</div>
	</div>
</div> */

const categoria = document.getElementById('categoria')
const seccionProductos = document.getElementById('seccionProductos')

const peticion = fetch('http://localhost:3000/category').then((response) =>
	response.json().then((json) => console.log(json))
)


function imprimirProductos() {
	for (const el in peticion) {
		seccionProductos.innerHTML = `<div class='flex flex-col gap-4'>
            <div class='flex justify-between items-center'>
                <p class='text-2xl w-full font-semibold'>${el.nombreCategoria}</p>
                <div class='flex w-full justify-end gap-3 items-center'>
                    <a href='' class='text-blue-600 text-lg font-medium'>
                        Ver todo
                    </a>
                    <img class='' src='/images/svg/arrow_back.svg' />
                </div>
            </div>
        </div> `
	}
}

imprimirProductos()
