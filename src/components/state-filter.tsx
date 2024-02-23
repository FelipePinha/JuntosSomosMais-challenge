export const FilterBox = () => {
    return (
        <section>
            <div className="border border-slate-200 space-y-6 p-6">
                <h2 className="font-bold text-lg">Por Estado</h2>

                <div className="space-y-3">
                    <div className="flex gap-2">
                        <input type="checkbox" name="sao-paulo" id="sao-paulo" />
                        <label htmlFor="sao-paulo">São Paulo</label>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" name="rio-de-janeiro" id="rio-de-janeiro" />
                        <label htmlFor="rio-de-janeiro">Rio de Janeiro</label>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" name="minas-gerais" id="minas-gerais" />
                        <label htmlFor="minas-gerais">Minas Gerais</label>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" name="espirito-santo" id="espirito-santo" />
                        <label htmlFor="espirito-santo">Espírito Santo</label>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" name="bahia" id="bahia" />
                        <label htmlFor="bahia">Bahia</label>
                    </div>
                </div>

                <button className="underline text-blue-900">Ver todos</button>
            </div>
        </section>
    );
};
