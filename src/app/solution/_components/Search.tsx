'use client';
import { useRef, useState } from 'react';

type Option =
  | { label: string; placeholder: string; id: string; range: false }
  | {
      label: string;
      placeholder: string;
      placeholder2: string;
      id: string;
      range: true;
    };

const OPTION: Option[] = [
  {
    label: '상품코드',
    placeholder: 'Enter code',
    id: 'code',
    range: false,
  },
  {
    label: '입고지',
    placeholder: 'Warehousing location',
    id: 'Warehousing',
    range: false,
  },
  {
    label: '상품명',
    placeholder: 'Enter name',
    id: 'name',
    range: false,
  },
  {
    label: '출고지',
    placeholder: 'Fulfillment location',
    id: 'Fulfillment',
    range: false,
  },
  {
    label: '가격',
    placeholder: 'Min price',
    placeholder2: 'Max price',
    id: 'price',
    range: true,
  },
  {
    label: '재고수량',
    placeholder: 'Min quantity',
    placeholder2: 'Max quantity',
    id: 'quantity',
    range: true,
  },
  {
    label: '공급가',
    placeholder: 'Net price',
    id: 'Net',
    range: false,
  },
  {
    label: '소재',
    placeholder: 'Material',
    id: 'Material',
    range: false,
  },
  {
    label: 'vat',
    placeholder: 'vat',
    id: 'vat',
    range: false,
  },
  {
    label: '배송비',
    placeholder: 'Delivery fee',
    id: 'Delivery',
    range: false,
  },
  {
    label: '제조국',
    placeholder: 'Country of origin',
    id: 'Country',
    range: false,
  },
];

const Search = ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({
    ...searchParams,
  });
  const errorRef = useRef<{ [key: string]: string }>({});

  const isRangeOption = (
    option: Option,
  ): option is Option & { placeholder2: string } => {
    return option.range;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    OPTION.forEach((option) => {
      const value = formValues[option.id];

      if (isRangeOption(option)) {
        const min = formValues[`${option.id}-min`];
        const max = formValues[`${option.id}-max`];

        if (
          (min && isNaN(parseFloat(min))) ||
          (max && isNaN(parseFloat(max)))
        ) {
          newErrors[option.label] = '최소값과 최대값은 모두 숫자여야 합니다.';
        } else if (min && max && parseFloat(min) > parseFloat(max)) {
          newErrors[option.label] = '최소값은 최대값보다 작아야 합니다.';
        }
      }

      if (
        value &&
        ['code', 'vat', 'Net', 'Delivery'].includes(option.id) &&
        isNaN(Number(value))
      ) {
        newErrors[option.label] = '숫자여야 합니다.';
      } else if (
        value &&
        ['Material', 'Country'].includes(option.id) &&
        /[^a-zA-Z]/.test(value)
      ) {
        newErrors[option.label] = '알파벳만 들어가야 합니다.';
      } else if (
        value &&
        ['Warehousing', 'Fulfillment'].includes(option.id) &&
        value.length !== 1
      ) {
        newErrors[option.label] = '알파벳 하나만 들어가야 합니다.';
      }
    });

    errorRef.current = newErrors;
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    if (!validate()) {
      event.preventDefault();

      const errorMessage = Object.entries(errorRef.current)
        .map(([key, value]) => `${key} 태그: ${value}`)
        .join('\n');

      alert(errorMessage);
    }
  };

  return (
    <form className="sticky left-0 right-0 w-full" onSubmit={handleSubmit}>
      <fieldset className="bg-blue-50 px-10 py-4">
        <div className="grid gap-x-6 gap-y-3 md:grid-cols-2">
          {OPTION.map((option) =>
            isRangeOption(option) ? (
              <div key={option.id} className="flex items-center">
                <label
                  htmlFor={`${option.id}-min`}
                  className="w-20 flex-shrink-0 whitespace-nowrap hover:text-blue-500"
                >
                  {option.label}
                </label>
                <div className="flex flex-grow items-center gap-2">
                  <input
                    type="text"
                    id={`${option.id}-min`}
                    name={`${option.id}-min`}
                    className="block h-7 w-1/2 rounded-lg border border-gray-300 bg-gray-50 px-2 py-1 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500"
                    placeholder={option.placeholder}
                    value={formValues[`${option.id}-min`] || ''}
                    onChange={handleChange}
                  />
                  <span className="mx-1">-</span>
                  <input
                    type="text"
                    id={`${option.id}-max`}
                    name={`${option.id}-max`}
                    className="block h-7 w-1/2 rounded-lg border border-gray-300 bg-gray-50 px-2 py-1 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500"
                    placeholder={option.placeholder2}
                    value={formValues[`${option.id}-max`] || ''}
                    onChange={handleChange}
                  />
                </div>
              </div>
            ) : (
              <div key={option.id} className="flex items-center">
                <label
                  htmlFor={option.id}
                  className="w-20 whitespace-nowrap hover:text-blue-500"
                >
                  {option.label}
                </label>
                <input
                  type="text"
                  id={option.id}
                  name={option.id}
                  className="block h-7 flex-grow rounded-lg border border-gray-300 bg-gray-50 px-2 py-1 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500"
                  placeholder={option.placeholder}
                  value={formValues[option.id] || ''}
                  onChange={handleChange}
                />
              </div>
            ),
          )}
        </div>
        <div className="mt-4 flex justify-end">
          <button className="rounded-lg bg-blue-700 px-4 py-2 text-lg font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            검색
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default Search;
