

const AddCoffee = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const user = {name, chef, supplier, taste, category, details, photo}
        // console.log(user)
        fetch('https://coffee-server-eight-iota.vercel.app/data', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className='w-10/12 mx-auto bg-[#F4F3F0] py-12'>
            <div className='text-center py-6'>
                <h1 className='text-3xl'>Add New Coffee</h1>
                <p className='w-1/2 mx-auto'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 gap-6 mb-6'>
                    <label className="input input-bordered flex items-center gap-2">
                        Name
                        <input type="text" name='name' className="grow" placeholder="name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Chef
                        <input type="text" name='chef' className="grow" placeholder="chef" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Supplier
                        <input type="text" name='supplier' className="grow" placeholder="supplier" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Taste
                        <input type="text" name='taste' className="grow" placeholder="taste" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Category
                        <input type="text" name='category' className="grow" placeholder="category" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Details
                        <input type="text" name='details' className="grow" placeholder="details" />
                    </label>
                </div>
                <label className="input input-bordered flex items-center gap-2">
                    Photo
                    <input type="text" name='photo' className="grow" placeholder="Photo-URL" />
                </label>
                <input className="w-full mt-6 btn bg-[#D2B48C] border-2 border-[#331A15]" type="submit" value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;