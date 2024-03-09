import { useFetchBrands } from "@/api/queries";
import React from "react";
import { IQuery } from "../pages/Catalog";
import { Formik, Field, Form } from "formik";
import { IProduct } from "@/models/IProduct";

interface Props {
  onSubmit: (query: IQuery) => void;
  onReset: () => void;
}

const Filter = React.memo(({ onSubmit, onReset }: Props) => {
  const { data: brands, status } = useFetchBrands();

  return (
    <div className="w-full py-4 px-6 mb-3 bg-white border rounded-md border-gray-200">
      <Formik
        initialValues={{ field: "", product: "", price: "", brand: "" }}
        onSubmit={(values) => {
          const selectedField = values.field;
          const fieldValue: string | number =
            selectedField === "price"
              ? Number(values[selectedField])
              : values[selectedField as keyof typeof values];

          onSubmit({
            field: selectedField as keyof IProduct,
            value: fieldValue,
          });
        }}
        onReset={(values) => {
          values.brand = "";
          values.field = "";
          values.price = "";
          values.product = "";
          onReset();
        }}
      >
        {({ values }) => (
          <Form>
            <fieldset
              role="group"
              className="grid grid-cols-1 sm:grid-cols-3 gap-2"
            >
              <legend className="text-xl font-semibold mb-2">Сортировка</legend>
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="product"
                  className="flex gap-x-1 items-center text-sm"
                >
                  <Field
                    type="radio"
                    id="product"
                    name="field"
                    value="product"
                    onClick={() => {
                      values.field = "product";
                      values.brand = "";
                      values.price = "";
                    }}
                  />
                  Наименование
                </label>
                <Field
                  type="text"
                  name="product"
                  className="w-full block rounded-md border border-gray-200 py-[9px] pl-2 text-sm outline-2 placeholder:text-gray-500"
                  placeholder="Например: Кольцо"
                  disabled={values.field !== "product"}
                />
              </div>

              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="price"
                  className="flex gap-x-1 items-center text-sm"
                >
                  <Field
                    type="radio"
                    id="price"
                    name="field"
                    value="price"
                    onClick={() => {
                      values.field = "price";
                      values.product = "";
                      values.brand = "";
                    }}
                  />
                  Цена (₽)
                </label>
                <Field
                  type="number"
                  name="price"
                  className="w-full block rounded-md border border-gray-200 py-[9px] pl-2 text-sm outline-2 placeholder:text-gray-500"
                  placeholder="Например: 3000"
                  disabled={values.field !== "price"}
                />
              </div>

              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="brand"
                  className="flex gap-x-1 items-center text-sm"
                >
                  <Field
                    type="radio"
                    id="brand"
                    name="field"
                    value="brand"
                    onClick={() => {
                      values.field = "price";
                      values.product = "";
                      values.price = "";
                    }}
                  />
                  Бренд
                </label>
                <Field
                  as="select"
                  className="w-full block rounded-md border border-gray-200 py-[9px] pl-2 text-sm outline-2"
                  name="brand"
                  disabled={values.field !== "brand"}
                >
                  <option value="" disabled>
                    Выберете
                  </option>
                  {status === "success" &&
                    brands.map((brand) => <option key={brand}>{brand}</option>)}
                </Field>
              </div>
            </fieldset>
            <div className="flex gap-x-2">
              <button
                type="submit"
                className="bg-blue-600 px-3 py-2 mt-3 rounded-md text-white text-sm font-semibold hover:bg-blue-400"
              >
                Применить
              </button>
              <button
                type="reset"
                className="bg-blue-600 px-3 py-2 mt-3 rounded-md text-white text-sm font-semibold hover:bg-blue-400"
              >
                Cбросить
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
});

export default Filter;
