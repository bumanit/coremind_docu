---
# slug:
title: Update purchase, sale, inventory date script
authors: [uuganbat]
tags: [odoo]
sidebar_position: 3
---

### Purchase & Picking date change

```sql

UPDATE
	purchase_order
SET
	date_order = date_order - INTERVAL '1 day',
	date_approve = date_approve - INTERVAL '10 day',
	create_date = create_date - INTERVAL '10 day',
	write_date = write_date - INTERVAL '14 day',
	date_planned_mps = date_planned_mps - INTERVAL '10 day'
WHERE
	id = 141147

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

UPDATE
	purchase_order_line
SET
	date_planned = date_planned - INTERVAL '10 day',
	create_date = create_date - INTERVAL '10 day',
	write_date = write_date - INTERVAL '14 day'
WHERE
	order_id = 141147

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

UPDATE
    stock_picking
SET
    scheduled_date = '2022-12-31 08:02:58',
    date = '2022-12-31 08:02:58',
    date_done = '2022-12-31 08:02:58',
    create_date = '2022-12-31 08:02:58',
    write_date = '2022-12-31 08:02:58'
WHERE
    id IN (9504554)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

UPDATE
    stock_move
SET
    date = '2022-12-31 08:02:58',
    date_expected = '2022-12-31 08:02:58',
    create_date = '2022-12-31 08:02:58',
    write_date = '2022-12-31 08:02:58'
WHERE
    picking_id IN (9504554)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

UPDATE
    stock_move_line
SET
    date = '2022-12-31 08:02:58',
    create_date = '2022-12-31 08:02:58',
    write_date = '2022-12-31 08:02:58'
WHERE
    picking_id IN (9504554)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

UPDATE
    account_move
SET
    date = '2022-12-31',
    create_date = '2022-12-31 08:02:58',
    write_date = '2022-12-31 08:02:58'
WHERE
    stock_move_id = ANY(
        SELECT
            id
        FROM
            stock_move
        WHERE
            picking_id IN (9504554)
    )

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

UPDATE
    account_move_line
SET
    date = '2022-12-31',
    create_date = '2022-12-31 08:02:58',
    write_date = '2022-12-31 08:02:58'
WHERE
    move_id = ANY(
        SELECT
            id
        FROM
            account_move
        WHERE
            stock_move_id = ANY(
                SELECT
                    id
                FROM
                    stock_move
                WHERE
                    picking_id IN (9504554)
            )
    )

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

UPDATE
    account_move
SET
    date = '2022-12-31',
    create_date = '2022-12-31 08:02:58',
    write_date = '2022-12-31 08:02:58'
WHERE
    id = 37853359

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

UPDATE
    account_move_line
SET
    date = '2022-12-31',
    create_date = '2022-12-31 08:02:58',
    write_date = '2022-12-31 08:02:58'
WHERE
    move_id = 37853359

```
