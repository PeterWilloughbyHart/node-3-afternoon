-- UPDATE * FROM product WHERE product_id = 1$;
-- SET description = $2;

UPDATE product SET description = $2 WHERE product_id = $1;