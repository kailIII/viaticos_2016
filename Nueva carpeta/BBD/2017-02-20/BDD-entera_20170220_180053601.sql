--
-- PostgreSQL database cluster dump
--

-- Started on 2017-02-20 18:00:54

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'md53175bce1d3201d16594cebf9d7eb3f9d';






--
-- Database creation
--

REVOKE ALL ON DATABASE template1 FROM PUBLIC;
REVOKE ALL ON DATABASE template1 FROM postgres;
GRANT ALL ON DATABASE template1 TO postgres;
GRANT CONNECT ON DATABASE template1 TO PUBLIC;
CREATE DATABASE viaticos_bd WITH TEMPLATE = template0 OWNER = postgres;


\connect postgres

SET default_transaction_read_only = off;

--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.4
-- Dumped by pg_dump version 9.5.1

-- Started on 2017-02-20 18:00:54

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2095 (class 1262 OID 12373)
-- Dependencies: 2094
-- Name: postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- TOC entry 2 (class 3079 OID 12355)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2098 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- TOC entry 1 (class 3079 OID 16384)
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- TOC entry 2099 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


--
-- TOC entry 2097 (class 0 OID 0)
-- Dependencies: 7
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2017-02-20 18:00:54

--
-- PostgreSQL database dump complete
--

\connect template1

SET default_transaction_read_only = off;

--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.4
-- Dumped by pg_dump version 9.5.1

-- Started on 2017-02-20 18:00:54

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2094 (class 1262 OID 1)
-- Dependencies: 2093
-- Name: template1; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE template1 IS 'default template for new databases';


--
-- TOC entry 1 (class 3079 OID 12355)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2097 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- TOC entry 2096 (class 0 OID 0)
-- Dependencies: 6
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2017-02-20 18:00:54

--
-- PostgreSQL database dump complete
--

\connect viaticos_bd

SET default_transaction_read_only = off;

--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.4
-- Dumped by pg_dump version 9.5.1

-- Started on 2017-02-20 18:00:54

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2 (class 3079 OID 12355)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2635 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- TOC entry 1 (class 3079 OID 16384)
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- TOC entry 2636 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 182 (class 1259 OID 16394)
-- Name: acceso_persona; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE acceso_persona (
    aper_usuario character varying(50) NOT NULL,
    per_id integer,
    aper_clave character varying(100)
);


ALTER TABLE acceso_persona OWNER TO postgres;

--
-- TOC entry 253 (class 1259 OID 49223)
-- Name: acceso_persona_aper_usuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE acceso_persona_aper_usuario_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE acceso_persona_aper_usuario_seq OWNER TO postgres;

--
-- TOC entry 183 (class 1259 OID 16401)
-- Name: anexo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE anexo (
    solanex_id integer NOT NULL,
    estsol_id integer,
    solanex_titulo character varying(30),
    solanex_descripcion character varying(100),
    solanex_ruta text
);


ALTER TABLE anexo OWNER TO postgres;

--
-- TOC entry 184 (class 1259 OID 16411)
-- Name: anexo_informe; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE anexo_informe (
    infanex_id integer NOT NULL,
    estinf_id integer,
    infanex_titulo character varying(30),
    infanex_descripcion character varying(100),
    infanex_ruta text
);


ALTER TABLE anexo_informe OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 40972)
-- Name: anexo_informe_infanex_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE anexo_informe_infanex_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE anexo_informe_infanex_id_seq OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 40970)
-- Name: anexo_solanex_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE anexo_solanex_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE anexo_solanex_id_seq OWNER TO postgres;

--
-- TOC entry 185 (class 1259 OID 16421)
-- Name: autorizacion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE autorizacion (
    aut_id smallint NOT NULL,
    per_id integer,
    aut_clave character varying(20)
);


ALTER TABLE autorizacion OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 40974)
-- Name: autorizacion_aut_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE autorizacion_aut_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE autorizacion_aut_id_seq OWNER TO postgres;

--
-- TOC entry 186 (class 1259 OID 16428)
-- Name: autorizado_informe; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE autorizado_informe (
    infaut_id integer NOT NULL,
    estinf_id integer,
    aut_id smallint,
    infaut_fechaautorizado date,
    infaut_comentario text,
    infaut_macaddress character(15)
);


ALTER TABLE autorizado_informe OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 40976)
-- Name: autorizado_informe_infaut_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE autorizado_informe_infaut_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE autorizado_informe_infaut_id_seq OWNER TO postgres;

--
-- TOC entry 187 (class 1259 OID 16439)
-- Name: autorizado_solicitud; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE autorizado_solicitud (
    solaut_id integer NOT NULL,
    estsol_id integer,
    per_id integer,
    aut_id smallint,
    solaut_fechaautorizado date,
    solaut_comentario text,
    colaut_macaddress character(15)
);


ALTER TABLE autorizado_solicitud OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 40978)
-- Name: autorizado_solicitud_solaut_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE autorizado_solicitud_solaut_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE autorizado_solicitud_solaut_id_seq OWNER TO postgres;

--
-- TOC entry 188 (class 1259 OID 16451)
-- Name: banco; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE banco (
    ban_id integer NOT NULL,
    ban_nombre character varying(100)
);


ALTER TABLE banco OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 40980)
-- Name: banco_ban_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE banco_ban_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE banco_ban_id_seq OWNER TO postgres;

--
-- TOC entry 189 (class 1259 OID 16457)
-- Name: banco_persona; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE banco_persona (
    banper_id integer NOT NULL,
    per_id integer,
    ban_id integer,
    banper_tipocuenta character(1),
    banper_numerocuenta character varying(30),
    banper_estado character(1)
);


ALTER TABLE banco_persona OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 40982)
-- Name: banco_persona_banper_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE banco_persona_banper_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE banco_persona_banper_id_seq OWNER TO postgres;

--
-- TOC entry 190 (class 1259 OID 16465)
-- Name: cargo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE cargo (
    car_id smallint NOT NULL,
    dep_id smallint,
    car_nombre character varying(100),
    car_categorizacion smallint,
    car_jefe smallint,
    rol_id integer
);


ALTER TABLE cargo OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 40984)
-- Name: cargo_car_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE cargo_car_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE cargo_car_id_seq OWNER TO postgres;

--
-- TOC entry 191 (class 1259 OID 16473)
-- Name: cargo_persona; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE cargo_persona (
    carper_id integer NOT NULL,
    per_id integer,
    car_id smallint,
    carper_desde date,
    carper_hasta date,
    carper_tipo character(1),
    carper_estado character(1)
);


ALTER TABLE cargo_persona OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 40986)
-- Name: cargo_persona_carper_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE cargo_persona_carper_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE cargo_persona_carper_id_seq OWNER TO postgres;

--
-- TOC entry 192 (class 1259 OID 16481)
-- Name: ciudad; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE ciudad (
    ciu_id integer NOT NULL,
    prov_id smallint,
    ciu_nombre character varying(50),
    ciu_canton character varying(50)
);


ALTER TABLE ciudad OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 40988)
-- Name: ciudad_ciu_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE ciudad_ciu_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE ciudad_ciu_id_seq OWNER TO postgres;

--
-- TOC entry 193 (class 1259 OID 16488)
-- Name: ciudad_comision; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE ciudad_comision (
    ciucom_id integer NOT NULL,
    ciu_id integer,
    com_id integer,
    ciucom_fechadesde date,
    ciucom_horadesde time without time zone,
    ciucom_fechahasta date,
    ciucom_horahasta time without time zone
);


ALTER TABLE ciudad_comision OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 40990)
-- Name: ciudad_comision_ciucom_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE ciudad_comision_ciucom_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE ciudad_comision_ciucom_id_seq OWNER TO postgres;

--
-- TOC entry 256 (class 1259 OID 57703)
-- Name: ciudad_informe; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE ciudad_informe (
    ciuinf_id integer NOT NULL,
    ciu_id integer,
    estinf_id integer,
    ciuinf_fechadesde date,
    ciuinf_horadesde time(6) without time zone,
    ciuinf_fechahasta date,
    ciuinf_horahasta time(6) without time zone
);
ALTER TABLE ONLY ciudad_informe ALTER COLUMN ciuinf_id SET STATISTICS 0;
ALTER TABLE ONLY ciudad_informe ALTER COLUMN ciu_id SET STATISTICS 0;
ALTER TABLE ONLY ciudad_informe ALTER COLUMN ciuinf_horadesde SET STATISTICS 0;
ALTER TABLE ONLY ciudad_informe ALTER COLUMN ciuinf_fechahasta SET STATISTICS 0;
ALTER TABLE ONLY ciudad_informe ALTER COLUMN ciuinf_horahasta SET STATISTICS 0;


ALTER TABLE ciudad_informe OWNER TO postgres;

--
-- TOC entry 194 (class 1259 OID 16496)
-- Name: ciudad_solicitud; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE ciudad_solicitud (
    ciusol_id integer NOT NULL,
    ciu_id integer,
    estsol_id integer,
    ciusol_fechadesde date,
    ciusol_horadesde time without time zone,
    ciusol_fechahasta date,
    ciusol_horahasta time without time zone
);


ALTER TABLE ciudad_solicitud OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 40992)
-- Name: ciudad_solicitud_ciusol_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE ciudad_solicitud_ciusol_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE ciudad_solicitud_ciusol_id_seq OWNER TO postgres;

--
-- TOC entry 195 (class 1259 OID 16504)
-- Name: comision; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE comision (
    com_id integer NOT NULL,
    com_nombre character(50),
    com_observacion text,
    com_fechadesde date,
    com_horadesde time without time zone,
    com_fechahasta date,
    com_horahasta time without time zone,
    com_estado character(1)
);


ALTER TABLE comision OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 40994)
-- Name: comision_com_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE comision_com_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE comision_com_id_seq OWNER TO postgres;

--
-- TOC entry 196 (class 1259 OID 16513)
-- Name: departamento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE departamento (
    dep_id smallint NOT NULL,
    ins_id integer,
    dep_nombre character varying(200),
    dep_siglas character(8),
    dep_padre smallint,
    dep_estado character(1)
);


ALTER TABLE departamento OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 40996)
-- Name: departamento_dep_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE departamento_dep_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE departamento_dep_id_seq OWNER TO postgres;

--
-- TOC entry 255 (class 1259 OID 57657)
-- Name: estado_informe; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE estado_informe (
    estinf_id integer NOT NULL,
    estinf_fechasalida date,
    estinf_horasalida time(6) without time zone,
    estinf_fechallegada date,
    estinf_horallegada time(6) without time zone,
    estinf_actividades text,
    estinf_estado character(1),
    estinf_rutapdf text,
    estsol_observacion text,
    inf_id integer NOT NULL
);


ALTER TABLE estado_informe OWNER TO postgres;

--
-- TOC entry 197 (class 1259 OID 16520)
-- Name: estado_solicitud; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE estado_solicitud (
    estsol_id integer NOT NULL,
    sol_id integer,
    estsol_fechasalida date,
    estsol_horasalida time without time zone,
    estsol_fechallegada date,
    estsol_horallegada time without time zone,
    estsol_actividades text,
    estsol_estado character(1),
    estsol_rutapdf text,
    estsol_observacion text
);


ALTER TABLE estado_solicitud OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 40998)
-- Name: estado_solicitud_estsol_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE estado_solicitud_estsol_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE estado_solicitud_estsol_id_seq OWNER TO postgres;

--
-- TOC entry 198 (class 1259 OID 16530)
-- Name: fondo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE fondo (
    fon_id integer NOT NULL,
    sol_id integer,
    fon_valor double precision,
    fon_fecha date,
    fon_observacion text
);


ALTER TABLE fondo OWNER TO postgres;

--
-- TOC entry 232 (class 1259 OID 41000)
-- Name: fondo_fon_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE fondo_fon_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE fondo_fon_id_seq OWNER TO postgres;

--
-- TOC entry 199 (class 1259 OID 16540)
-- Name: gasto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE gasto (
    gas_id integer NOT NULL,
    ciuinf_id integer,
    estinf_id integer,
    gas_fecha date,
    gas_valor double precision,
    gas_local character varying(150),
    gas_tipodocumento character(3),
    gas_numerodocumento character varying(20),
    gas_concepto character varying(200)
);


ALTER TABLE gasto OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 41002)
-- Name: gasto_gas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE gasto_gas_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE gasto_gas_id_seq OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 16548)
-- Name: informe; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE informe (
    inf_id integer NOT NULL,
    sol_id integer,
    inf_fecharealizacion date,
    inf_numeroactualizacion smallint,
    inf_estado character(1),
    inf_anio character(4)
);


ALTER TABLE informe OWNER TO postgres;

--
-- TOC entry 234 (class 1259 OID 41004)
-- Name: informe_inf_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE informe_inf_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE informe_inf_id_seq OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 16559)
-- Name: institucion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE institucion (
    ins_id integer NOT NULL,
    ins_nombre character varying(150),
    ins_direccion character varying(200),
    ins_logo character varying(250),
    ins_estado character(1)
);


ALTER TABLE institucion OWNER TO postgres;

--
-- TOC entry 235 (class 1259 OID 41006)
-- Name: institucion_ins_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE institucion_ins_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE institucion_ins_id_seq OWNER TO postgres;

--
-- TOC entry 251 (class 1259 OID 49191)
-- Name: modrol_carper; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE modrol_carper (
    mrcp_id integer NOT NULL,
    modrol_id integer,
    carper_id integer,
    mrcp_observacion character varying(150)
);
ALTER TABLE ONLY modrol_carper ALTER COLUMN modrol_id SET STATISTICS 0;
ALTER TABLE ONLY modrol_carper ALTER COLUMN carper_id SET STATISTICS 0;


ALTER TABLE modrol_carper OWNER TO postgres;

--
-- TOC entry 252 (class 1259 OID 49221)
-- Name: modrol_carper_mrcp_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE modrol_carper_mrcp_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE modrol_carper_mrcp_id_seq OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16568)
-- Name: modulo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE modulo (
    mod_id smallint NOT NULL,
    mod_nombre character varying(50),
    mod_descripcion character varying(200),
    mod_ubicacion text,
    mod_padre smallint,
    mod_estado character(1),
    mod_nombremostrar character(50)
);


ALTER TABLE modulo OWNER TO postgres;

--
-- TOC entry 236 (class 1259 OID 41008)
-- Name: modulo_mod_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE modulo_mod_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE modulo_mod_id_seq OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 16577)
-- Name: modulo_rol; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE modulo_rol (
    modrol_id integer NOT NULL,
    rol_id smallint,
    mod_id smallint,
    modrol_desde date,
    modrol_hasta date,
    modrol_observaciones text
);


ALTER TABLE modulo_rol OWNER TO postgres;

--
-- TOC entry 237 (class 1259 OID 41010)
-- Name: modulo_rol_modrol_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE modulo_rol_modrol_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE modulo_rol_modrol_id_seq OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16588)
-- Name: nousado; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE nousado (
    nousa_id integer NOT NULL,
    trainf_id integer,
    nousa_fechajustificativo date,
    nousa_justificativo text
);


ALTER TABLE nousado OWNER TO postgres;

--
-- TOC entry 238 (class 1259 OID 41012)
-- Name: nousado_nousa_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE nousado_nousa_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE nousado_nousa_id_seq OWNER TO postgres;

--
-- TOC entry 254 (class 1259 OID 57419)
-- Name: pais; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE pais (
    pais_id integer NOT NULL,
    pais_nombre character varying(150)
);


ALTER TABLE pais OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 16598)
-- Name: persona; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE persona (
    per_id integer NOT NULL,
    per_nombre character varying(50),
    per_apellido character varying(50),
    per_identificacion character(13),
    per_estado character(1),
    per_correoelectronico character varying(70),
    per_iniciales character(4),
    per_creado date,
    per_nombrecompleto character varying(101)
);


ALTER TABLE persona OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16604)
-- Name: persona_comision; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE persona_comision (
    percom_id integer NOT NULL,
    sol_id integer,
    com_id integer,
    per_id integer
);


ALTER TABLE persona_comision OWNER TO postgres;

--
-- TOC entry 240 (class 1259 OID 41016)
-- Name: persona_comision_percom_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE persona_comision_percom_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE persona_comision_percom_id_seq OWNER TO postgres;

--
-- TOC entry 239 (class 1259 OID 41014)
-- Name: persona_per_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE persona_per_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE persona_per_id_seq OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 16613)
-- Name: provincia; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE provincia (
    prov_id smallint NOT NULL,
    prov_nombre character varying(100),
    prov_region character varying(10),
    pais_id integer
);


ALTER TABLE provincia OWNER TO postgres;

--
-- TOC entry 241 (class 1259 OID 41018)
-- Name: provincia_prov_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE provincia_prov_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE provincia_prov_id_seq OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 16619)
-- Name: rol; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE rol (
    rol_id smallint NOT NULL,
    rol_nombre character varying(30),
    rol_estado character(1)
);


ALTER TABLE rol OWNER TO postgres;

--
-- TOC entry 242 (class 1259 OID 41020)
-- Name: rol_rol_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE rol_rol_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE rol_rol_id_seq OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16625)
-- Name: solicitud; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE solicitud (
    sol_id integer NOT NULL,
    per_id integer,
    sol_secuencial integer,
    sol_idsolicitud character varying(40),
    sol_numeroactualizacion smallint,
    sol_estado character(1),
    sol_anio character(4),
    sol_fecharealizacion date
);


ALTER TABLE solicitud OWNER TO postgres;

--
-- TOC entry 243 (class 1259 OID 41022)
-- Name: solicitud_sol_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE solicitud_sol_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE solicitud_sol_id_seq OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 16632)
-- Name: tipo_transporte; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE tipo_transporte (
    tiptra_id integer NOT NULL,
    tiptra_nombre character varying(40),
    tiptra_tipo character varying(15),
    tiptra_sigla character varying(4)
);


ALTER TABLE tipo_transporte OWNER TO postgres;

--
-- TOC entry 244 (class 1259 OID 41024)
-- Name: tipo_transporte_tiptra_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE tipo_transporte_tiptra_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE tipo_transporte_tiptra_id_seq OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16638)
-- Name: transporte_asignado; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE transporte_asignado (
    traasi_id integer NOT NULL,
    tiptra_id integer,
    estsol_id integer,
    vps_id integer,
    trasol_id2 integer,
    traasi_rutainicio character varying(30),
    traasi_rutafin character varying(30),
    traasi_fechasalida date,
    traasi_horasalida time without time zone,
    traasi_fechallegada date,
    traasi_horallegada time without time zone,
    traasi_ticketelectronico character varying(50),
    traasi_estado character(1),
    traasi_observacion text
);


ALTER TABLE transporte_asignado OWNER TO postgres;

--
-- TOC entry 245 (class 1259 OID 41026)
-- Name: transporte_asignado_traasi_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE transporte_asignado_traasi_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE transporte_asignado_traasi_id_seq OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 16651)
-- Name: transporte_informe; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE transporte_informe (
    trainf_id integer NOT NULL,
    traasi_id integer,
    estinf_id integer,
    trainf_rutainicio character varying(150),
    trainf_rutafin character varying(150),
    trainf_fechasalida date,
    trainf_horasalida time without time zone,
    trainf_fechallegada date,
    trainf_horallegada time without time zone,
    trainf_seuso character(1)
);


ALTER TABLE transporte_informe OWNER TO postgres;

--
-- TOC entry 246 (class 1259 OID 41028)
-- Name: transporte_informe_trainf_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE transporte_informe_trainf_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE transporte_informe_trainf_id_seq OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16659)
-- Name: transporte_solicitado; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE transporte_solicitado (
    trasol_id integer NOT NULL,
    estsol_id integer,
    tiptra_id integer,
    trasol_rutainicio character varying(150),
    trasol_rutafin character varying(150),
    trasol_fechasalida date,
    trasol_horasalida time without time zone,
    trasol_fechallegada date,
    trasol_horallegada time without time zone
);


ALTER TABLE transporte_solicitado OWNER TO postgres;

--
-- TOC entry 247 (class 1259 OID 41030)
-- Name: transporte_solicitado_trasol_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE transporte_solicitado_trasol_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE transporte_solicitado_trasol_id_seq OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16667)
-- Name: transporte_solicitadoextra; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE transporte_solicitadoextra (
    trasol_id2 integer NOT NULL,
    tiptra_id integer,
    estsol_id integer,
    trasol_rutainicio character varying(150),
    trasol_rutafin character varying(150),
    trasol_fechasalida date,
    trasol_horasalida time without time zone,
    trasol_fechallegada date,
    trasol_horallegada time without time zone
);


ALTER TABLE transporte_solicitadoextra OWNER TO postgres;

--
-- TOC entry 248 (class 1259 OID 41032)
-- Name: transporte_solicitadoextra_trasol_id2_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE transporte_solicitadoextra_trasol_id2_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE transporte_solicitadoextra_trasol_id2_seq OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16675)
-- Name: vehiculo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE vehiculo (
    veh_id smallint NOT NULL,
    veh_modelo character varying(30),
    veh_marca character varying(30),
    veh_placa character varying(11),
    veh_estado character(1)
);


ALTER TABLE vehiculo OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16681)
-- Name: vehiculo_persona_comision; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE vehiculo_persona_comision (
    vps_id integer NOT NULL,
    per_id integer,
    veh_id smallint,
    com_id integer,
    vps_fechainicio date,
    vps_horainicio time without time zone,
    vps_fechafin date,
    vps_horafin time without time zone
);


ALTER TABLE vehiculo_persona_comision OWNER TO postgres;

--
-- TOC entry 250 (class 1259 OID 41036)
-- Name: vehiculo_persona_comision_vps_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE vehiculo_persona_comision_vps_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE vehiculo_persona_comision_vps_id_seq OWNER TO postgres;

--
-- TOC entry 249 (class 1259 OID 41034)
-- Name: vehiculo_veh_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE vehiculo_veh_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE vehiculo_veh_id_seq OWNER TO postgres;

--
-- TOC entry 2553 (class 0 OID 16394)
-- Dependencies: 182
-- Data for Name: acceso_persona; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY acceso_persona (aper_usuario, per_id, aper_clave) FROM stdin;
geoconda.aguas@vicepresidencia.gob.ec	1	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
alejandro.aguirre@vicepresidencia.gob.ec	2	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
doris.aguirre@vicepresidencia.gob.ec	3	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
fernanda.alban@vicepresidencia.gob.ec	4	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
sara.alcocer@vicepresidencia.gob.ec	5	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
fernando.aldas@vicepresidencia.gob.ec	6	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
cesar.almeida@vicepresidencia.gob.ec	7	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
andres.alvarez@vicepresidencia.gob.ec	8	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
carlos.alvearg@vicepresidencia.gob.ec	9	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
johana.alvear@vicepresidencia.gob.ec	10	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
geovanny.ambuludi@vicepresidencia.gob.ec	11	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
sara.andrade@vicepresidencia.gob.ec	12	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
veronica.angulo@vicepresidencia.gob.ec	13	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
luis.anrango@vicepresidencia.gob.ec	14	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
jorge.arboleda@vicepresidencia.gob.ec	15	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
juan.arce@vicepresidencia.gob.ec	16	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
oscar.arguello@vicepresidencia.gob.ec	17	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
romulo.armas@vicepresidencia.gob.ec	18	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
richarth.armijos@vicepresidencia.gob.ec	19	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
paolo.artieda@vicepresidencia.gob.ec	20	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
ana.avila@vicepresidencia.gob.ec	21	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
rafael.aviles@vicepresidencia.gob.ec	22	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
luis.ayo@vicepresidencia.gob.ec	23	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
hipolito.bajana@vicepresidencia.gob.ec	24	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
mariana.balarezo@vicepresidencia.gob.ec	25	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
gina.balladares@vicepresidencia.gob.ec	26	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
marlon.baque@vicepresidencia.gob.ec	27	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
romulo.barcenes@vicepresidencia.gob.ec	28	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
patricio.barros@vicepresidencia.gob.ec	29	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
maria.bastidas@vicepresidencia.gob.ec	30	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
washington.benitez@vicepresidencia.gob.ec	31	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
santiago.benitez@vicepresidencia.gob.ec	32	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
carlos.bernal@vicepresidencia.gob.ec	33	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
alejandro.borja@vicepresidencia.gob.ec	34	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
mauricio.borja@vicepresidencia.gob.ec	35	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
luis.bosmediano@vicepresidencia.gob.ec	36	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
tatiana.briones@vicepresidencia.gob.ec	37	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
maria.bucheli@vicepresidencia.gob.ec	38	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
angelica.bustamante@vicepresidencia.gob.ec	39	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
elizabeth.cabezas@vicepresidencia.gob.ec	40	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
roberto.cabezas@vicepresidencia.gob.ec	41	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
belen.cachaguay@vicepresidencia.gob.ec	42	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
segundo.caisaguano@vicepresidencia.gob.ec	43	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
santiago.calderon@vicepresidencia.gob.ec	45	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
jimmy.canarte@vicepresidencia.gob.ec	46	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
johnnathan.carrillo@vicepresidencia.gob.ec	47	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
maria.castaneda@vicepresidencia.gob.ec	48	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
lucina.castellanos@vicepresidencia.gob.ec	49	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
diego.castillo@vicepresidencia.gob.ec	50	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
melida.castro@vicepresidencia.gob.ec	51	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
maria.cedeño@vicepresidencia.gob.ec	52	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
pablo.cepeda@vicepresidencia.gob.ec	53	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
luis.cervantes@vicepresidencia.gob.ec	54	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
mario.cervantes@vicepresidencia.gob.ec	55	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
juan.cevallos@vicepresidencia.gob.ec	56	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
diego.cevallos@vicepresidencia.gob.ec	57	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
diana.changoluisa@vicepresidencia.gob.ec	58	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
nathalie.chauvin@vicepresidencia.gob.ec	59	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
juan.chaves@vicepresidencia.gob.ec	60	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
sandra.chavez@vicepresidencia.gob.ec	61	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
juan.puco@vicepresidencia.gob.ec	62	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
luis.cobo@vicepresidencia.gob.ec	63	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
carlos.correa@vicepresidencia.gob.ec	64	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
rosa.corregidor@vicepresidencia.gob.ec	65	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
sonia.cruz@vicepresidencia.gob.ec	66	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
jackeline.cueva@vicepresidencia.gob.ec	67	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
angela.cusme@vicepresidencia.gob.ec	68	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
luis.dalgo@vicepresidencia.gob.ec	69	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
eugenia.davila@vicepresidencia.gob.ec	70	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
karina.delacruz@vicepresidencia.gob.ec	71	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
alexandra.delgado@vicepresidencia.gob.ec	72	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
ruben.diaz@vicepresidencia.gob.ec	73	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
mickey.diaz@vicepresidencia.gob.ec	74	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
marco.duque@vicepresidencia.gob.ec	75	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
omar.erreis@vicepresidencia.gob.ec	76	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
arturo.escala@vicepresidencia.gob.ec	77	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
juan.espin@vicepresidencia.gob.ec	78	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
sofia.espin@vicepresidencia.gob.ec	79	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
paola.espinel@vicepresidencia.gob.ec	80	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
rita.espinosa@vicepresidencia.gob.ec	81	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
luis.estacio@vicepresidencia.gob.ec	82	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
santiago.estevez@vicepresidencia.gob.es	83	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
daniela.fierro@vicepresidencia.gob.ec	84	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
maria.flores@vicepresidencia.gob.ec	85	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
alexis.fuentes@vicepresidencia.gob.ec	86	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
patricio.galarraga@vicepresidencia.gob.ec	87	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
elizabeth.galarza@vicepresidencia.gob.ec	88	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
diego.gallegos@vicepresidencia.gob.ec	89	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
joel.gallegos@vicepresidencia.gob.ec	90	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
andrea.garcia@vicepresidencia.gob.ec	92	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
monica.garcia@vicepresidencia.gob.ec	93	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
rosana.giler@vicepresidencia.gob.ec	94	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
jorge.glas@vicepresidencia.gob.ec	95	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
danny.gomez@vicepresidencia.gob.ec	96	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
denisse.gonzalez@vicepresidencia.gob.ec	97	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
diana.gonzalez@vicepresidencia.gob.ec	98	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
sandra.grimaldi@vicepresidencia.gob.ec	99	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
andrea.guerrero@vicepresidencia.gob.ec	100	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
darwin.guijarro@vicepresidencia.gob.ec	101	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
juan.guisamano@vicepresidencia.gob.ec	102	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
jorge.guzman@vicepresidencia.gob.ec	104	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
sharon.hanze@vicepresicencia.gob.ec	105	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
isabel.hernandez@vicepresidencia.gob.ec	106	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
aide.herrera@vicepresidencia.gob.ec	107	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
wladimir.jativa@vicepresidencia.gob.ec	108	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
juan.jativa@vicepresidencia.gob.ec	109	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
leonardo.jimenez@vicepresidencia.gob.ec	110	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
lorena.lara@vicepresidencia.gob.ec	111	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
diego.lara@vicepresidencia.gob.ec	112	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
guillermo.lascano@vicepresidencia.gob.ec	113	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
lexi.loor@vicepresidencia.gob.ec 	114	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
giovanni.lopez@vicepresidencia.gob.ec	115	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
santiago.lopez@vicepresidencia.gob.ec	116	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
angela.lucio@vicepresidencia.gob.ec	117	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
adolfo.mariscal@vicepresidencia.gob.ec	118	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
marco.martinez@vicepresidencia.gob.ec	119	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
luis.martinez@vicepresidencia.gob.ec	120	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
francisco.mena@vicepresidencia.gob.ec	121	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
eduardo.mendoza@vicepresidencia.gob.ec	122	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
galo.mendoza@vicepresidencia.gob.ec	123	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
raquel.merino@vicepresidencia.gob.ec	124	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
veronica.sanchez@vicepresidencia.gob.ec	125	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
jonathan.miranda@vicepresidencia.gob.ec	126	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
jose.mite@vicepresidencia.gob.ec	127	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
wilson.mites@vicepresidencia.gob.ec	128	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
melida.molina@vicepresidencia.gob.ec	129	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
rodrigo.molineros@vicepresidencia.gob.ec	130	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
ramiro.monteros@vicepresidencia.gob.ec	131	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
carolina.montoya@vicepresidencia.gob.ec	132	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
evelyn.mora@vicepresidencia.gob.ec	133	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
ivan.morales@vicepresidencia.gob.ec	134	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
norman.morales@vicepresidencia.gob.ec	135	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
paul.mosquera@vicepresidencia.gob.ec	136	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
irma.mosquera@vicepresidencia.gob.ec	137	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
olga.muentes@vicepresidencia.gob.ec	138	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
tania.munoz@vicepresidencia.gob.ec	139	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
gabriela.murillo@vicepresidencia.gob.ec	140	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
christian.novoa@vicepresidencia.gob.ec	141	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
cecilia.ocampo@vicepresidencia.gob.ec	142	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
fabian.olivo@vicepresidencia.gob.ec	143	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
mayra.ormaza@vicepresidencia.gob.ec	144	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
jorge.ortega@vicepresidencia.gob.ec	145	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
christian.ortega@vicepresdiencia.gob.ec	146	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
cristina.ortiz@vicepresidencia.gob.ec	147	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
agustin.ortiz@vicepresidencia.gob.ec	148	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
daniel.ortiz@vicepresidencia.gob.ec	149	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
andrea.pabon@vicepresidencia.gob.ec	150	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
soledad.padilla@vicepresidencia.gob.ec	151	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
milton.paredes@vicepresidencia.gob.ec	152	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
solin.paredes@vicepresidencia.gob.ec	153	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
ivan.paredes@vicepresidencia.gob.ec	154	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
cristian.paredes@vicepresidencia.gob.ec	155	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
angel.parion@vicepresidencia.gob.ec	156	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
grace.parra@vicepresidencia.gob.ec	157	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
luis.pastrano@vicepresidencia.gob.ec	158	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
ivan.paz@vicepresidencia.gob.ec	159	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
stefania.peredo@vicepresidencia.gob.ec	160	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
jose.perez@vicepresidencia.gob.ec	161	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
maria.plaza@vicepresidencia.gob.ec	162	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
bety.ponce@vicepresidencia.gob.ec	163	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
jose.portilla@vicepresidencia.gob.ec	164	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
hernan.potosi@vicepresidencia.gob.ec	165	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
maria.poveda@vicepresidencia.gob.ec	166	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
diego.prado@vicepresidencia.gob.ec	167	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
catalina.proano@vicepresidencia.gob.ec	168	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
luis.quimis@vicepresidencia.gob.ec	169	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
mario.ramon@vicepresidencia.gob.ec	170	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
belgica.ramos@vicepresidencia.gob.ec	171	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
ximena.ramos@vicepresidencia.gob.ec	172	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
juan.real@vicepresidencia.gob.ec	173	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
homero.rendon@vicepresidencia.gob.ec	174	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
monica.reyes@vicepresidencia.gob.ec	175	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
patricia.rodriguez@vicepresidencia.gob.ec	176	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
santiago.ron@vicepresidencia.gob.ec	177	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
fausto.rosero@vicepresidencia.gob.ec	178	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
enma.ruiz@vicepresidencia.gob.ec	179	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
sergio.ruiz@vicepresidencia.gob.ec	180	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
patricio.ruiz@vicepresidencia.gob.ec	181	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
evelyn.salazar@vicepresidencia.gob.ec	182	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
christian.salinas@vicepresidencia.gob.ec	183	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
carla.sanchez@vicepresidencia.gob.ec	184	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
jeannette.sanchez@vicepresidencia.gob.ec	185	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
william.sango@vicepresidencia.gob.ec	186	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
ruth.sarango@vicepresidencia.gob.ec	187	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
wilson.segovia@vicepresidencia.gob.ec	188	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
cesar.silva@vicepresidencia.gob.ec	189	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
marco.simbana@vicepresidencia.gob.ec	190	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
tamara.sotomayo@vicepresidencia.gob.ec	191	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
erica.tejada@vicepresidencia.gob.ec	192	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
juan.tixi@vicepresidencia.gob.ec	193	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
patricio.torres @vicepresidencia.gob.ec	195	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
andrea.utreras@vicepresidencia.gob.ec	196	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
paulina.vallejo@vicepresidencia.gob.ec	197	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
jeakeline.vallejo@vicepresidencia.gob.ec	198	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
carlos.vallejo@vicepresidencia.gob.ec	199	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
roger.callejo@vicepresidencia.gob.ec	200	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
dayse.vasconez@vicepresidencia.gob.ec	201	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
maria.vera@vicepresidencia.gob.ec	202	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
juan.villacis@vicepresidencia.gob.ec	203	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
patricia.vinueza@vicepresidencia.gob.ec	204	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
fernando.viteri@vicepresidencia.gob.ec	205	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
byron.wilchez@vicepresidencia.gob.ec	206	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
milton.yanez@vicepresidencia.gob.ec	207	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
marisol.yankur@vicepresidencia.gob.ec	208	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
victor.zapata@vicepresidencia.gob.ec	209	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
juan.zurita@vicepresidencia.gob.ec	210	2b334560a50937581711e03202dccda617d4c4397b31b0cd496c7272276903e1
\.


--
-- TOC entry 2637 (class 0 OID 0)
-- Dependencies: 253
-- Name: acceso_persona_aper_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('acceso_persona_aper_usuario_seq', 1, false);


--
-- TOC entry 2554 (class 0 OID 16401)
-- Dependencies: 183
-- Data for Name: anexo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY anexo (solanex_id, estsol_id, solanex_titulo, solanex_descripcion, solanex_ruta) FROM stdin;
\.


--
-- TOC entry 2555 (class 0 OID 16411)
-- Dependencies: 184
-- Data for Name: anexo_informe; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY anexo_informe (infanex_id, estinf_id, infanex_titulo, infanex_descripcion, infanex_ruta) FROM stdin;
\.


--
-- TOC entry 2638 (class 0 OID 0)
-- Dependencies: 218
-- Name: anexo_informe_infanex_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('anexo_informe_infanex_id_seq', 1, false);


--
-- TOC entry 2639 (class 0 OID 0)
-- Dependencies: 217
-- Name: anexo_solanex_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('anexo_solanex_id_seq', 1, false);


--
-- TOC entry 2556 (class 0 OID 16421)
-- Dependencies: 185
-- Data for Name: autorizacion; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY autorizacion (aut_id, per_id, aut_clave) FROM stdin;
\.


--
-- TOC entry 2640 (class 0 OID 0)
-- Dependencies: 219
-- Name: autorizacion_aut_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('autorizacion_aut_id_seq', 1, false);


--
-- TOC entry 2557 (class 0 OID 16428)
-- Dependencies: 186
-- Data for Name: autorizado_informe; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY autorizado_informe (infaut_id, estinf_id, aut_id, infaut_fechaautorizado, infaut_comentario, infaut_macaddress) FROM stdin;
\.


--
-- TOC entry 2641 (class 0 OID 0)
-- Dependencies: 220
-- Name: autorizado_informe_infaut_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('autorizado_informe_infaut_id_seq', 1, false);


--
-- TOC entry 2558 (class 0 OID 16439)
-- Dependencies: 187
-- Data for Name: autorizado_solicitud; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY autorizado_solicitud (solaut_id, estsol_id, per_id, aut_id, solaut_fechaautorizado, solaut_comentario, colaut_macaddress) FROM stdin;
\.


--
-- TOC entry 2642 (class 0 OID 0)
-- Dependencies: 221
-- Name: autorizado_solicitud_solaut_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('autorizado_solicitud_solaut_id_seq', 1, false);


--
-- TOC entry 2559 (class 0 OID 16451)
-- Dependencies: 188
-- Data for Name: banco; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY banco (ban_id, ban_nombre) FROM stdin;
1	BANCO AMAZONAS
2	BANCO BOLIVARIANO
3	BANCO CAPITAL
4	BANCO COMERCIAL DE MANABÍ
5	BANCO COOPNACIONAL
6	BANCO D-MIRO
7	BANCO DE GUAYAQUIL
8	BANCO DE LOJA
9	BANCO DE MACHALA
10	BANCO DEL AUSTRO
11	BANCO DEL BANK
12	BANCO DEL PACÍFICO
13	BANCO FINCA
14	BANCO GENERAL RUMIÑAHUI
15	BANCO INTERNACIONAL
16	BANCO LITORAL
17	BANCO PICHINCHA
18	BANCO PROCREDIT
20	BANCO SOLIDARIO
22	CITIBANK
23	MUTUALISTA AMBATO
24	MUTUALISTA AZUAY
25	MUTUALISTA IMBABURA
26	MUTUALISTA PICHINCHA
21	BANCO DESARROLLO
19	PRODUBANCO
\.


--
-- TOC entry 2643 (class 0 OID 0)
-- Dependencies: 222
-- Name: banco_ban_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('banco_ban_id_seq', 1, false);


--
-- TOC entry 2560 (class 0 OID 16457)
-- Dependencies: 189
-- Data for Name: banco_persona; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY banco_persona (banper_id, per_id, ban_id, banper_tipocuenta, banper_numerocuenta, banper_estado) FROM stdin;
1	32	19	A	12136064758	A
2	87	19	A	12345678901	A
3	96	12	A	1005534097	A
4	20	17	A	098767876778	A
\.


--
-- TOC entry 2644 (class 0 OID 0)
-- Dependencies: 223
-- Name: banco_persona_banper_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('banco_persona_banper_id_seq', 1, false);


--
-- TOC entry 2561 (class 0 OID 16465)
-- Dependencies: 190
-- Data for Name: cargo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY cargo (car_id, dep_id, car_nombre, car_categorizacion, car_jefe, rol_id) FROM stdin;
83	3	DIRECTOR/A DE AUDITORÍA INTERNA	\N	116	3
90	4	DIRECTOR/A DE GESTIÓN DOCUMENTAL Y ARCHIVO	\N	116	3
77	28	DIRECTOR DE SEGUIMIENTO DE PLANES, PROGRAMAS Y PROYECTOS	\N	76	3
1	35	ANALISTA	\N	50	2
2	33	ANALISTA	\N	94	2
3	37	ANALISTA ADMINISTRATIVO 2	\N	79	2
4	37	ANALISTA ADMINISTRATIVO 3	\N	79	2
5	39	ANALISTA DE ADMINISTRACIÓN DE RECURSOS HUMANOS 1	\N	80	2
6	39	ANALISTA DE ADMINISTRACIÓN DE RECURSOS HUMANOS 3	\N	80	2
7	37	ANALISTA DE COMPRAS PÚBLICAS 2	\N	79	2
8	37	ANALISTA DE COMPRAS PÚBLICAS 3	\N	79	2
9	38	ANALISTA DE CONTABILIDAD 1	\N	100	2
10	37	ANALISTA DE CONTABILIDAD 2	\N	79	2
11	38	ANALISTA DE CONTABILIDAD 2	\N	100	2
12	16	ANALISTA DE CONTENIDOS Y DISCURSOS 3	\N	72	2
13	4	ANALISTA DE GESTIÓN DOCUMENTAL Y ARCHIVO 2	\N	90	2
14	35	ANALISTA DE IMAGEN E IDENTIDAD INSTITUCIONAL 1	\N	50	2
15	35	ANALISTA DE IMAGEN E IDENTIDAD INSTITUCIONAL 3	\N	50	2
16	34	ANALISTA DE MEDIOS Y RELACIONES PÚBLICAS 	\N	50	2
17	9	ANALISTA DE MEDIOS Y RELACIONES PÚBLICAS 1	\N	69	2
18	33	ANALISTA DE MONITOREO Y ANÁLISIS PROSPECTIVO 2	\N	94	2
19	33	ANALISTA DE MONITOREO Y ANÁLISIS PROSPECTIVO 3	\N	94	2
20	39	ANALISTA DE NÓMINA 2	\N	80	2
21	41	ANALISTA DE PATROCINIO LEGAL 3	\N	95	2
22	9	ANALISTA DE PLANIFICACIÓN DE AGENDA 2	\N	69	2
23	27	ANALISTA DE PLANIFICACIÓN E INVERSIÓN 3	\N	96	2
24	38	ANALISTA DE PRESUPUESTO 1	\N	100	2
25	38	ANALISTA DE PRESUPUESTO 2	\N	100	2
26	38	ANALISTA DE PRESUPUESTO 3	\N	100	2
27	28	ANALISTA DE SEGUIMIENTO DE PLANES PROGRAMAS Y PROYECTOS 3	\N	77	2
28	29	ANALISTA DE TECNOLOGÍAS DE LA INFORMACIÓN 2	\N	99	2
29	29	ANALISTA DE TECNOLOGÍAS DE LA INFORMACIÓN 3	\N	99	2
30	8	ASESOR DE LA COORDINACIÓN GENERAL DE AGENDA	\N	69	2
31	40	ASESOR DE LA COORDINACIÓN GENERAL DE ASESORÍA JURÍDICA 	\N	70	2
32	11	ASESOR DE LA COORDINACIÓN GENERAL DE LOGÍSTICA Y PROTOCOLO	\N	116	2
33	32	ASESOR DE LA SUBSECRETARÍA DE COMUNICACIÓN	\N	93	2
34	2	ASESOR DEL SECRETARIO GENERAL 	\N	116	2
35	43	ASESOR DEL VICEPRESIDENTE 	\N	120	2
36	24	ASESORA DE LA COORDINACIÓN GENERAL DE ATENCIÓN CIUDADANA	\N	71	2
37	5	ASESORA DE LA SUBSECRETARIA GENERAL DEL DESPACHO DE LA VICEPRESIDENCIA	\N	121	2
38	37	ASISTENTE ADMINISTRATIVO	\N	79	2
39	32	ASISTENTE ADMINISTRATIVO	\N	118	2
40	5	ASISTENTE ADMINISTRATIVO	\N	121	2
41	38	ASISTENTE ADMINISTRATIVO 	\N	100	2
42	12	ASISTENTE DE LOGÍSTICA DEL DESPACHO VPR	\N	74	2
43	30	ASISTENTE TÉCNICA DE GESTIÓN DEL CAMBIO Y CULTURA ORGANIZACIONAL	\N	89	2
44	4	ASISTENTE TÉCNICA DE GESTIÓN DOCUMENTAL Y ARCHIVO	\N	90	2
45	9	ASISTENTE TÉCNICA DE PLANIFICACIÓN DE AGENDA	\N	69	2
46	27	ASISTENTE TÉCNICA DE PLANIFICACIÓN E INVERSIÓN	\N	96	2
47	37	ASISTENTE TÉCNICO ADMINISTRATIVO	\N	79	2
48	38	ASISTENTE TÉCNICO DE CONTABILIDAD 	\N	100	2
49	4	ASISTENTE TÉCNICO DE GESTIÓN DOCUMENTAL Y ARCHIVO	\N	90	2
50	35	ASISTENTE TÉCNICO DE IMAGEN E IDENTIDAD INSTITUCIONAL	\N	50	2
51	15	ASISTENTE TÉCNICO DE LA INFORMACIÓN VPR	\N	72	2
52	34	ASISTENTE TÉCNICO DE MEDIOS Y RELACIONES PÚBLICAS	\N	93	2
53	33	ASISTENTE TÉCNICO DE MONITOREO Y ANÁLISIS PROSPECTIVO	\N	99	2
54	41	ASISTENTE TÉCNICO DE PATROCINIO LEGAL	\N	95	2
55	38	ASISTENTE TÉCNICO DE PRESUPUESTO 	\N	100	2
56	13	ASISTENTE TÉCNICO DE PROTOCOLO	\N	97	2
57	39	ASISTENTE TÉCNICO DE RECURSOS HUMANOS 	\N	80	2
58	28	ASISTENTE TÉCNICO DE SEGUIMIENTO DE PLANES, PROGRAMAS Y PROYECTOS	\N	77	2
59	29	ASISTENTE TÉCNICO DE TECNOLOGÍA DE LA INFORMACIÓN 	\N	99	2
60	3	AUDITOR/A INTERNO/A 3	\N	83	2
61	37	AUXILIAR DE SERVICIOS	\N	79	2
63	34	CAMARÓGRAFO  	\N	50	2
64	32	CAMARÓGRAFO  	\N	93	2
65	37	CONDUCTOR ADMINISTRATIVO	\N	73	2
66	38	CONTADOR/A GENERAL	\N	100	2
78	17	DIRECTOR/A  DE DISPOSICIONES PRESIDENCIALES Y  VICEPRESIDENCIALES	\N	121	3
79	37	DIRECTOR/A ADMINISTRATIVO	\N	67	3
81	15	DIRECTOR/A DE ANÁLISIS DE LA INFORMACIÓN	\N	72	3
82	42	DIRECTOR/A DE ASUNTOS REGULATORIOS	\N	70	3
84	16	DIRECTOR/A DE CONTENIDOS Y DISCURSOS VICEPRESIDENCIALES	\N	70	3
85	19	DIRECTOR/A DE COORDINACIÓN DE LOS SECTORES ESTRATÉGICOS	\N	75	3
86	20	DIRECTOR/A DE COORDINACIÓN DEL SECTOR PRODUCTIVO	\N	75	3
89	30	DIRECTOR/A DE GESTIÓN DEL CAMBIO Y CULTURA ORGANIZACIONAL 	\N	76	3
67	36	COORDINADOR GENERAL ADMINISTRATIVO FINANCIERO	\N	120	4
73	21	COORDINADOR/A GENERAL DE EVALUACIÓN Y CONTROL DE LOS SECTORES ESTRATÉGICOS Y PRODUCTIVOS	\N	119	4
74	11	COORDINADOR/A GENERAL DE LOGÍSTICA Y PROTOCOLO	\N	121	4
75	18	COORDINADOR/A GENERAL DE LOS SECTORES ESTRATÉGICOS Y PRODUCTIVOS	\N	119	4
76	26	COORDINADOR/A GENERAL DE PLANIFICACIÓN Y GESTIÓN ESTRATÉGICA	\N	120	4
127	1	VICEPRESIDENTE DE LA REPÚBLICA DEL ECUADOR	\N	0	2
80	39	DIRECTOR/A DE ADMINISTRACIÓN DE RECURSOS HUMANOS	\N	120	3
68	25	COORDINADOR/A DE ESTRATEGIA INTERNACIONAL	\N	120	4
69	8	COORDINADOR/A GENERAL DE AGENDA	\N	121	4
70	40	COORDINADOR/A GENERAL DE ASESORÍA JURÍDICA	\N	120	4
71	24	COORDINADOR/A GENERAL DE ATENCIÓN CIUDADANA	\N	120	4
72	14	COORDINADOR/A GENERAL DE DISPOSICIONES Y CONTENIDOS	\N	121	4
88	10	DIRECTOR/A DE GESTIÓN DE AGENDA	\N	69	3
87	22	DIRECTOR/A DE EVALUACIÓN Y CONTROL DEL SECTOR ESTRATÉGICO	\N	119	3
91	32	DIRECTOR/A DE IMAGEN E IDENTIDAD INSTITUCIONAL	\N	118	3
92	11	DIRECTOR/A DE LOGÍSTICA 	\N	74	3
93	34	DIRECTOR/A DE MEDIOS Y RELACIONES PÚBLICAS	\N	118	3
94	33	DIRECTOR/A DE MONITOREO Y ANÁLISIS PROSPECTIVO	\N	118	3
95	41	DIRECTOR/A DE PATROCINIO LEGAL	\N	70	3
96	27	DIRECTOR/A DE PLANIFICACIÓN E INVERSIÓN	\N	76	3
97	13	DIRECTOR/A DE PROTOCOLO	\N	74	3
98	31	DIRECTOR/A DE SERVICIOS, PROCESOS Y CALIDAD	\N	76	3
100	38	DIRECTOR/A FINANCIERO/A	\N	67	3
125	39	ANALISTA DE ADMINISTRACIÓN DE RECURSOS HUMANOS 2	\N	80	2
128	37	ANALISTA DE BIENES Y TRASPORTE 3	\N	79	2
129	32	PRODUCTOR Y REALIZADOR	\N	91	2
101	5	ESPECIALISTA ADMINISTRATIVO	\N	121	2
102	34	FOTÓGRAFO	\N	93	2
103	36	OFICINISTA 	\N	100	2
104	25	PASANTE UNIVERSITARIO	\N	68	2
105	39	PASANTE UNIVERSITARIO	\N	80	2
106	31	PASANTE UNIVERSITARIO	\N	98	2
107	29	PASANTE UNIVERSITARIO	\N	99	2
108	37	RECEPCIONISTA	\N	79	2
109	40	SECRETARIA/O EJECUTIVA/O 1	\N	70	2
110	37	SECRETARIA/O EJECUTIVA/O 1	\N	79	2
111	3	SECRETARIA/O EJECUTIVA/O 1	\N	83	2
112	2	SECRETARIA/O EJECUTIVA/O 1	\N	93	2
113	32	SECRETARIA/O EJECUTIVA/O 1	\N	116	2
114	7	SECRETARIA/O EJECUTIVA/O 1	\N	119	2
115	2	SECRETARIA/O EJECUTIVA/O 2	\N	116	2
117	44	SECRETARIO/A TÉCNICO/A DEL COMITÉ PARA LA RECONSTRUCCIÓN Y REACTIVACIÓN PRODUCTIVA	\N	0	2
122	38	TESORERA/O	\N	79	2
123	37	TÉCNICO DE BIENES Y TRANSPORTE	\N	79	2
124	37	TÉCNICO DE MANTENIMIENTO	\N	100	2
126	39	ANALISTA DE NÓMINA 3	\N	80	2
99	29	DIRECTOR/A DE TECNOLOGÍAS DE LA INFORMACIÓN Y COMUNICACIÓN	\N	76	3
118	32	SUBSECRETARIO/A DE COMUNICACIÓN	\N	120	4
119	7	SUBSECRETARIO/A GENERAL DE LA GESTIÓN ESTRATÉGICA Y PRODUCTIVA	\N	116	4
120	6	SUBSECRETARIO/A GENERAL DE LA VICEPRESIDENCIA	\N	116	4
121	5	SUBSECRETARIO/A GENERAL DEL DESPACHO DE LA VICEPRESIDENCIA	\N	116	4
116	2	SECRETARIO GENERAL DE LA VICEPRESIDENCIA DE LA REPÚBLICA	\N	0	4
\.


--
-- TOC entry 2645 (class 0 OID 0)
-- Dependencies: 224
-- Name: cargo_car_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('cargo_car_id_seq', 1, false);


--
-- TOC entry 2562 (class 0 OID 16473)
-- Dependencies: 191
-- Data for Name: cargo_persona; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY cargo_persona (carper_id, per_id, car_id, carper_desde, carper_hasta, carper_tipo, carper_estado) FROM stdin;
36	38	25	2016-10-05	\N	\N	A
37	39	60	2016-10-05	\N	\N	A
38	40	35	2016-10-05	\N	\N	A
39	41	65	2016-10-05	\N	\N	A
40	42	59	2016-10-05	\N	\N	A
41	43	38	2016-10-05	\N	\N	A
42	44	106	2016-10-05	\N	\N	A
43	45	77	2016-10-05	\N	\N	A
44	46	33	2016-10-05	\N	\N	A
45	47	6	2016-10-05	\N	\N	A
46	48	11	2016-10-05	\N	\N	A
47	49	9	2016-10-05	\N	\N	A
48	51	26	2016-10-05	\N	\N	A
49	52	96	2016-10-05	\N	\N	A
50	53	65	2016-10-05	\N	\N	A
51	54	38	2016-10-05	\N	\N	A
52	55	4	2016-10-05	\N	\N	A
53	56	64	2016-10-05	\N	\N	A
54	58	5	2016-10-05	\N	\N	A
55	59	27	2016-10-05	\N	\N	A
56	60	50	2016-10-05	\N	\N	A
57	61	89	2016-10-05	\N	\N	A
58	62	63	2016-10-05	\N	\N	A
59	63	1	2016-10-05	\N	\N	A
60	64	65	2016-10-05	\N	\N	A
61	65	39	2016-10-05	\N	\N	A
62	66	57	2016-10-05	\N	\N	A
63	67	10	2016-10-05	\N	\N	A
64	68	35	2016-10-05	\N	\N	A
65	69	124	2016-10-05	\N	\N	A
66	70	109	2016-10-05	\N	\N	A
67	71	20	2016-10-05	\N	\N	A
68	72	108	2016-10-05	\N	\N	A
69	73	75	2016-10-05	\N	\N	A
70	75	65	2016-10-05	\N	\N	A
71	77	88	2016-10-05	\N	\N	A
72	79	71	2016-10-05	\N	\N	A
73	80	108	2016-10-05	\N	\N	A
74	81	34	2016-10-05	\N	\N	A
75	82	65	2016-10-05	\N	\N	A
76	83	61	2016-10-05	\N	\N	A
77	84	16	2016-10-05	\N	\N	A
78	85	6	2016-10-05	\N	\N	A
79	86	65	2016-10-05	\N	\N	A
81	88	44	2016-10-05	\N	\N	A
82	90	59	2016-10-05	\N	\N	A
83	91	104	2016-10-05	\N	\N	A
84	92	23	2016-10-05	\N	\N	A
85	93	61	2016-10-05	\N	\N	A
86	94	35	2016-10-05	\N	\N	A
87	95	126	2016-10-05	\N	\N	A
88	96	28	2016-10-05	\N	\N	A
89	97	35	2016-10-05	\N	\N	A
90	98	43	2016-10-05	\N	\N	A
91	99	35	2016-10-05	\N	\N	A
92	100	18	2016-10-05	\N	\N	A
93	101	113	2016-10-05	\N	\N	A
94	102	35	2016-10-05	\N	\N	A
95	103	105	2016-10-05	\N	\N	A
96	104	65	2016-10-05	\N	\N	A
97	105	69	2016-10-05	\N	\N	A
98	106	110	2016-10-05	\N	\N	A
99	107	24	2016-10-05	\N	\N	A
100	108	52	2016-10-05	\N	\N	A
101	109	3	2016-10-05	\N	\N	A
102	110	32	2016-10-05	\N	\N	A
103	111	95	2016-10-05	\N	\N	A
104	112	115	2016-10-05	\N	\N	A
105	113	61	2016-10-05	\N	\N	A
106	114	36	2016-10-05	\N	\N	A
107	115	52	2016-10-05	\N	\N	A
108	116	35	2016-10-05	\N	\N	A
109	117	55	2016-10-05	\N	\N	A
110	118	119	2016-10-05	\N	\N	A
111	119	49	2016-10-05	\N	\N	A
112	120	65	2016-10-05	\N	\N	A
113	121	49	2016-10-05	\N	\N	A
114	122	80	2016-10-05	\N	\N	A
115	123	65	2016-10-05	\N	\N	A
116	124	49	2016-10-05	\N	\N	A
117	125	25	2016-10-05	\N	\N	A
118	126	102	2016-10-05	\N	\N	A
119	127	86	2016-10-05	\N	\N	A
120	128	47	2016-10-05	\N	\N	A
121	129	37	2016-10-05	\N	\N	A
122	130	65	2016-10-05	\N	\N	A
123	131	47	2016-10-05	\N	\N	A
124	132	101	2016-10-05	\N	\N	A
125	133	47	2016-10-05	\N	\N	A
126	134	29	2016-10-05	\N	\N	A
127	135	100	2016-10-05	\N	\N	A
128	136	30	2016-10-05	\N	\N	A
129	137	79	2016-10-05	\N	\N	A
130	138	35	2016-10-05	\N	\N	A
131	139	68	2016-10-05	\N	\N	A
132	140	92	2016-10-05	\N	\N	A
133	141	15	2016-10-05	\N	\N	A
134	142	34	2016-10-05	\N	\N	A
135	143	31	2016-10-05	\N	\N	A
136	144	42	2016-10-05	\N	\N	A
137	145	61	2016-10-05	\N	\N	A
138	146	93	2016-10-05	\N	\N	A
139	147	46	2016-10-05	\N	\N	A
140	148	121	2016-10-05	\N	\N	A
141	149	84	2016-10-05	\N	\N	A
142	151	78	2016-10-05	\N	\N	A
143	152	66	2016-10-05	\N	\N	A
80	87	99	2016-10-05	\N	\N	A
1	1	22	2016-10-05	\N	\N	A
2	2	14	2016-10-05	\N	\N	A
3	3	61	2016-10-05	\N	\N	A
4	4	12	2016-10-05	\N	\N	A
5	6	65	2016-10-05	\N	\N	A
6	7	65	2016-10-05	\N	\N	A
7	8	113	2016-10-05	\N	\N	A
8	9	120	2016-10-05	\N	\N	A
9	10	13	2016-10-05	\N	\N	A
10	11	8	2016-10-05	\N	\N	A
11	12	122	2016-10-05	\N	\N	A
12	13	125	2016-10-05	\N	\N	A
30	32	28	2016-10-05	\N	\N	A
13	14	65	2016-10-05	\N	\N	A
14	15	91	2016-10-05	\N	\N	A
15	16	35	2016-10-05	\N	\N	A
16	17	126	2016-10-05	\N	\N	A
17	18	87	2016-10-05	\N	\N	A
18	19	101	2016-10-05	\N	\N	A
19	20	28	2016-10-05	\N	\N	A
20	22	101	2016-10-05	\N	\N	A
21	23	65	2016-10-05	\N	\N	A
22	24	1	2016-10-05	\N	\N	A
23	25	83	2016-10-05	\N	\N	A
24	26	72	2016-10-05	\N	\N	A
25	27	6	2016-10-05	\N	\N	A
26	28	61	2016-10-05	\N	\N	A
27	29	65	2016-10-05	\N	\N	A
28	30	76	2016-10-05	\N	\N	A
29	31	65	2016-10-05	\N	\N	A
31	33	117	2016-10-05	\N	\N	A
32	34	65	2016-10-05	\N	\N	A
33	35	56	2016-10-05	\N	\N	A
34	36	65	2016-10-05	\N	\N	A
35	37	101	2016-10-05	\N	\N	A
144	153	61	2016-10-05	\N	\N	A
145	154	67	2016-10-05	\N	\N	A
146	155	53	2016-10-05	\N	\N	A
147	156	61	2016-10-05	\N	\N	A
148	157	94	2016-10-05	\N	\N	A
149	158	123	2016-10-05	\N	\N	A
150	159	103	2016-10-05	\N	\N	A
151	160	110	2016-10-05	\N	\N	A
152	161	34	2016-10-05	\N	\N	A
153	162	97	2016-10-05	\N	\N	A
154	163	11	2016-10-05	\N	\N	A
155	164	65	2016-10-05	\N	\N	A
156	165	65	2016-10-05	\N	\N	A
157	166	118	2016-10-05	\N	\N	A
158	167	65	2016-10-05	\N	\N	A
159	168	45	2016-10-05	\N	\N	A
160	169	19	2016-10-05	\N	\N	A
161	170	51	2016-10-05	\N	\N	A
162	171	112	2016-10-05	\N	\N	A
163	172	82	2016-10-05	\N	\N	A
164	173	65	2016-10-05	\N	\N	A
165	174	74	2016-10-05	\N	\N	A
166	175	3	2016-10-05	\N	\N	A
167	176	70	2016-10-05	\N	\N	A
168	177	34	2016-10-05	\N	\N	A
169	178	123	2016-10-05	\N	\N	A
170	179	44	2016-10-05	\N	\N	A
171	180	116	2016-10-05	\N	\N	A
172	181	73	2016-10-05	\N	\N	A
173	182	108	2016-10-05	\N	\N	A
174	183	48	2016-10-05	\N	\N	A
175	184	21	2016-10-05	\N	\N	A
176	185	35	2016-10-05	\N	\N	A
177	186	61	2016-10-05	\N	\N	A
178	187	40	2016-10-05	\N	\N	A
179	188	65	2016-10-05	\N	\N	A
180	189	128	2016-10-05	\N	\N	A
181	190	7	2016-10-05	\N	\N	A
182	191	81	2016-10-05	\N	\N	A
183	192	17	2016-10-05	\N	\N	A
184	193	61	2016-10-05	\N	\N	A
185	194	107	2016-10-05	\N	\N	A
186	195	65	2016-10-05	\N	\N	A
187	196	18	2016-10-05	\N	\N	A
188	197	98	2016-10-05	\N	\N	A
189	198	90	2016-10-05	\N	\N	A
190	199	35	2016-10-05	\N	\N	A
191	200	54	2016-10-05	\N	\N	A
192	201	114	2016-10-05	\N	\N	A
193	202	111	2016-10-05	\N	\N	A
194	203	58	2016-10-05	\N	\N	A
195	204	85	2016-10-05	\N	\N	A
196	205	2	2016-10-05	\N	\N	A
197	207	49	2016-10-05	\N	\N	A
198	208	112	2016-10-05	\N	\N	A
199	209	65	2016-10-05	\N	\N	A
200	210	129	2016-10-05	\N	\N	A
\.


--
-- TOC entry 2646 (class 0 OID 0)
-- Dependencies: 225
-- Name: cargo_persona_carper_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('cargo_persona_carper_id_seq', 1, false);


--
-- TOC entry 2563 (class 0 OID 16481)
-- Dependencies: 192
-- Data for Name: ciudad; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY ciudad (ciu_id, prov_id, ciu_nombre, ciu_canton) FROM stdin;
1	7	Cuenca	Cuenca
2	7	Gualaceo	Gualaceo
3	7	Paute	Paute
4	7	Santa Isabel	Santa Isabel
5	7	Camilo Ponce Enríquez	Camilo Ponce Enríquez
6	7	Chordeleg	Chordeleg
7	7	Girón	Girón
8	7	Sígsig	Sígsig
9	7	San Fernando	San Fernando
10	7	Nabón	Nabón
11	7	Guachapala	Guachapala
12	7	Pucará	Pucará
13	7	San Felipe de Oña	San Felipe de Oña
14	7	Sevilla de Oro	Sevilla de Oro
15	7	El Pan	El Pan
16	8	Guaranda	Guaranda
17	8	San Miguel	San Miguel
18	8	Caluma	Caluma
19	8	Echeandía	Echeandía
20	8	San José de Chimbo	San José de Chimbo
21	8	Chillanes	Chillanes
22	8	Las Naves	Las Naves
23	9	La Troncal	La Troncal
24	9	Azogues	Azogues
25	9	Cañar	Cañar
26	9	Biblián	Biblián
27	9	El Tambo	El Tambo
28	9	Suscal	Suscal
29	9	Déleg	Déleg
30	10	Tulcán	Tulcán
31	10	San Gabriel	San Gabriel
32	10	El Ángel	El Ángel
33	10	Huaca	Huaca
34	10	Mira	Mira
35	10	Bolívar	Bolívar
36	11	Riobamba	Riobamba
37	11	Cumandá	Cumandá
38	11	Guano	Guano
39	11	Alausí	Alausí
40	11	Chambo	Chambo
41	11	Chunchi	Chunchi
42	11	Pallatanga	Pallatanga
43	11	Guamote	Guamote
44	11	Villa La Unión (Cajabamba)	Cajabamba
45	11	Penipe	Penipe
46	12	Latacunga	Latacunga
47	12	La Maná	La Maná
48	12	San Miguel (Salcedo)	Salcedo
49	12	Pujilí	Pujilí
50	12	Saquisilí	Saquisilí
51	12	Sigchos	Sigchos
52	12	El Corazón	El Corazón
53	1	Machala	Machala
54	1	Pasaje	Pasaje
55	1	Santa Rosa	Santa Rosa
56	1	Huaquillas	Huaquillas
57	1	El Guabo	El Guabo
58	1	Arenillas	Arenillas
59	1	Piñas	Piñas
60	1	Zaruma	Zaruma
61	1	Portovelo	Portovelo
62	1	Balsas	Balsas
63	1	Marcabelí	Marcabelí
64	1	Paccha	Paccha
65	1	La Victoria	La Victoria
66	1	Chilla	Chilla
67	2	Esmeraldas	Esmeraldas
68	2	Rosa Zárate (Quinindé)	Quinindé
69	2	San Lorenzo	San Lorenzo
70	2	Atacames	Atacames
71	2	Muisne	Muisne
72	2	Valdez (Limones)	Limones
73	2	Rioverde	Rioverde
74	24	Puerto Ayora	Puerto Ayora
75	24	Puerto Baquerizo Moreno	Puerto Baquerizo Moreno
76	24	Puerto Villamil	Puerto Villamil
77	3	Guayaquil	Guayaquil
78	3	Eloy Alfaro (Durán)	Durán
79	3	Milagro	Milagro
80	3	Daule	Daule
81	3	Samborondón	Samborondón
82	3	Velasco Ibarra (El Empalme)	El Empalme
83	3	El Triunfo	El Triunfo
84	3	General Villamil (Playas)	Playas
85	3	Balzar	Balzar
86	3	Naranjito	Naranjito
87	3	Naranjal	Naranjal
88	3	Pedro Carbo	Pedro Carbo
89	3	Yaguachi	Yaguachi
90	3	Lomas de Sargentillo	Lomas de Sargentillo
91	3	Salitre	Salitre
92	3	Balao	Balao
93	3	Santa Lucía	Santa Lucía
94	3	Palestina	Palestina
95	3	Alfredo Baquerizo Moreno (Jujan)	Jujan
96	3	Narcisa de Jesús (Nobol)	Nobol
97	3	Simón Bolívar	Simón Bolívar
98	3	Coronel Marcelino Maridueña	Coronel Marcelino Maridueña
99	3	Colimes	Colimes
100	3	General Antonio Elizalde (Bucay)	Bucay
101	3	Isidro Ayora	Isidro Ayora
102	13	Ibarra	Ibarra
103	13	Otavalo	Otavalo
104	13	Atuntaqui	Atuntaqui
105	13	Cotacachi	Cotacachi
106	13	Pimampiro	Pimampiro
107	13	Urcuquí	Urcuquí
108	14	Loja	Loja
109	14	Catamayo	Catamayo
110	14	Cariamanga	Cariamanga
111	14	Macará	Macará
112	14	Catacocha	Catacocha
113	14	Alamor	Alamor
114	14	Celica	Celica
115	14	Saraguro	Saraguro
116	14	Zapotillo	Zapotillo
117	14	Pindal	Pindal
118	14	Amaluza	Amaluza
119	14	Gonzanamá	Gonzanamá
120	14	Chaguarpamba	Chaguarpamba
121	14	Sozoranga	Sozoranga
122	14	Quilanga	Quilanga
123	14	Olmedo	Olmedo
124	4	Quevedo	Quevedo
125	4	Babahoyo	Babahoyo
126	4	Buena Fe	Buena Fe
127	4	Ventanas	Ventanas
128	4	Vinces	Vinces
129	4	Valencia	Valencia
130	4	Montalvo	Montalvo
131	4	Mocache	Mocache
132	4	Puebloviejo	Puebloviejo
133	4	Palenque	Palenque
134	4	Catarama	Catarama
135	4	Baba	Baba
136	4	Quinsaloma	Quinsaloma
137	5	Manta	Manta
138	5	Portoviejo	Portoviejo
139	5	Chone	Chone
140	5	El Carmen	El Carmen
141	5	Montecristi	Montecristi
142	5	Jipijapa	Jipijapa
143	5	Pedernales	Pedernales
144	5	Bahía de Caráquez	Bahía de Caráquez
145	5	Calceta	Calceta
146	5	Jaramijó	Jaramijó
147	5	Tosagua	Tosagua
148	5	Puerto López	Puerto López
149	5	San Vicente	San Vicente
150	5	Santa Ana de Vuelta Larga	Santa Ana de Vuelta Larga
151	5	Rocafuerte	Rocafuerte
152	5	Paján	Paján
153	5	Flavio Alfaro	Flavio Alfaro
154	5	Jama	Jama
155	5	Junín	Junín
156	5	Pichincha	Pichincha
157	5	Sucre	Sucre
158	5	Olmedo	Olmedo
159	18	Macas	Macas
160	18	Sucúa	Sucúa
161	18	Gualaquiza	Gualaquiza
162	18	General Leonidas Plaza Gutiérrez (Limón)	Limón
163	18	Palora	Palora
164	18	Santiago de Méndez	Santiago de Méndez
165	18	Logroño	Logroño
166	18	San Juan Bosco	San Juan Bosco
167	18	Santiago	Santiago
168	18	Taisha	Taisha
169	18	Huamboya	Huamboya
170	18	Pablo Sexto	Pablo Sexto
171	19	Tena	Tena
172	19	Archidona	Archidona
173	19	El Chaco	El Chaco
174	19	Baeza	Baeza
175	19	Carlos Julio Arosemena Tola	Carlos Julio Arosemena Tola
176	20	Francisco de Orellana (Coca)	Coca
177	20	La Joya de los Sachas	La Joya de los Sachas
178	20	Loreto	Loreto
179	20	Tiputini	Tiputini
180	21	Puyo	Puyo
181	21	Santa Clara	Santa Clara
182	21	Arajuno	Arajuno
183	21	Mera	Mera
184	15	Quito	Quito
185	15	Sangolquí	Sangolquí
186	15	Cayambe	Cayambe
187	15	Machachi	Machachi
188	15	Tabacundo	Tabacundo
189	15	Pedro Vicente Maldonado	Pedro Vicente Maldonado
190	15	San Miguel de Los Bancos	San Miguel de Los Bancos
191	15	Puerto Quito	Puerto Quito
192	6	La Libertad	La Libertad
193	6	Santa Elena	Santa Elena
194	6	Salinas	Salinas
195	16	Santo Domingo	Santo Domingo
196	16	La Concordia	La Concordia
197	22	Nueva Loja	Nueva Loja
198	22	Shushufindi	Shushufindi
199	22	Puerto El Carmen de Putumayo	Puerto El Carmen de Putumayo
200	22	El Dorado de Cascales	El Dorado de Cascales
201	22	Lumbaqui	Lumbaqui
202	22	Tarapoa	Tarapoa
203	22	La Bonita	La Bonita
204	17	Ambato	Ambato
205	17	Baños de Agua Santa	Baños de Agua Santa
206	17	Pelileo	Pelileo
207	17	Píllaro	Píllaro
208	17	Quero	Quero
209	17	Cevallos	Cevallos
210	17	Patate	Patate
211	17	Tisaleo	Tisaleo
212	17	Mocha	Mocha
213	23	Zamora	Zamora
214	23	Yantzaza	Yantzaza
215	23	Zumba	Zumba
216	23	El Pangui	El Pangui
217	23	Zumbi	Zumbi
218	23	Palanda	Palanda
219	23	Guayzimi	Guayzimi
220	23	28 de Mayo (San José de Yacuambi)	San José de Yacuambi
221	23	Paquisha	Paquisha
\.


--
-- TOC entry 2647 (class 0 OID 0)
-- Dependencies: 226
-- Name: ciudad_ciu_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('ciudad_ciu_id_seq', 1, false);


--
-- TOC entry 2564 (class 0 OID 16488)
-- Dependencies: 193
-- Data for Name: ciudad_comision; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY ciudad_comision (ciucom_id, ciu_id, com_id, ciucom_fechadesde, ciucom_horadesde, ciucom_fechahasta, ciucom_horahasta) FROM stdin;
\.


--
-- TOC entry 2648 (class 0 OID 0)
-- Dependencies: 227
-- Name: ciudad_comision_ciucom_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('ciudad_comision_ciucom_id_seq', 1, false);


--
-- TOC entry 2627 (class 0 OID 57703)
-- Dependencies: 256
-- Data for Name: ciudad_informe; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY ciudad_informe (ciuinf_id, ciu_id, estinf_id, ciuinf_fechadesde, ciuinf_horadesde, ciuinf_fechahasta, ciuinf_horahasta) FROM stdin;
\.


--
-- TOC entry 2565 (class 0 OID 16496)
-- Dependencies: 194
-- Data for Name: ciudad_solicitud; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY ciudad_solicitud (ciusol_id, ciu_id, estsol_id, ciusol_fechadesde, ciusol_horadesde, ciusol_fechahasta, ciusol_horahasta) FROM stdin;
2	184	15	\N	\N	\N	\N
3	184	16	\N	\N	\N	\N
4	184	17	\N	\N	\N	\N
5	184	19	\N	\N	\N	\N
6	102	19	\N	\N	\N	\N
7	184	20	\N	\N	\N	\N
8	102	20	\N	\N	\N	\N
9	184	21	\N	\N	\N	\N
10	102	21	\N	\N	\N	\N
11	184	22	\N	\N	\N	\N
12	102	22	\N	\N	\N	\N
13	184	23	\N	\N	\N	\N
14	102	23	\N	\N	\N	\N
15	184	24	\N	\N	\N	\N
16	102	24	\N	\N	\N	\N
17	1	37	\N	\N	\N	\N
18	2	37	\N	\N	\N	\N
19	69	38	\N	\N	\N	\N
20	70	38	\N	\N	\N	\N
21	1	39	\N	\N	\N	\N
22	2	39	\N	\N	\N	\N
23	1	42	\N	\N	\N	\N
24	2	42	\N	\N	\N	\N
25	1	43	\N	\N	\N	\N
26	2	43	\N	\N	\N	\N
27	1	44	\N	\N	\N	\N
28	2	44	\N	\N	\N	\N
29	1	45	\N	\N	\N	\N
30	2	45	\N	\N	\N	\N
31	1	46	\N	\N	\N	\N
32	2	46	\N	\N	\N	\N
33	1	47	\N	\N	\N	\N
34	2	47	\N	\N	\N	\N
35	1	48	\N	\N	\N	\N
36	2	48	\N	\N	\N	\N
37	1	49	\N	\N	\N	\N
38	2	49	\N	\N	\N	\N
39	1	50	\N	\N	\N	\N
40	2	50	\N	\N	\N	\N
41	1	51	\N	\N	\N	\N
42	2	51	\N	\N	\N	\N
43	1	52	\N	\N	\N	\N
44	2	52	\N	\N	\N	\N
45	1	53	\N	\N	\N	\N
46	2	53	\N	\N	\N	\N
47	1	54	\N	\N	\N	\N
48	5	54	\N	\N	\N	\N
49	38	55	\N	\N	\N	\N
50	39	55	\N	\N	\N	\N
51	1	56	\N	\N	\N	\N
52	2	56	\N	\N	\N	\N
53	1	57	\N	\N	\N	\N
54	2	57	\N	\N	\N	\N
55	34	58	\N	\N	\N	\N
56	35	58	\N	\N	\N	\N
57	1	59	\N	\N	\N	\N
58	2	59	\N	\N	\N	\N
59	1	60	\N	\N	\N	\N
60	2	60	\N	\N	\N	\N
61	1	61	\N	\N	\N	\N
62	2	61	\N	\N	\N	\N
63	1	62	\N	\N	\N	\N
64	2	62	\N	\N	\N	\N
65	1	63	\N	\N	\N	\N
66	2	63	\N	\N	\N	\N
67	1	64	\N	\N	\N	\N
68	2	64	\N	\N	\N	\N
69	1	65	\N	\N	\N	\N
70	2	65	\N	\N	\N	\N
71	1	66	\N	\N	\N	\N
72	2	66	\N	\N	\N	\N
73	36	67	\N	\N	\N	\N
74	37	67	\N	\N	\N	\N
75	1	68	\N	\N	\N	\N
76	2	68	\N	\N	\N	\N
77	1	69	\N	\N	\N	\N
78	2	69	\N	\N	\N	\N
79	1	70	\N	\N	\N	\N
80	2	70	\N	\N	\N	\N
81	1	71	\N	\N	\N	\N
82	2	71	\N	\N	\N	\N
83	1	72	\N	\N	\N	\N
84	2	72	\N	\N	\N	\N
85	1	73	\N	\N	\N	\N
86	2	73	\N	\N	\N	\N
87	1	74	\N	\N	\N	\N
88	2	74	\N	\N	\N	\N
89	1	75	\N	\N	\N	\N
90	2	75	\N	\N	\N	\N
91	1	76	\N	\N	\N	\N
92	2	76	\N	\N	\N	\N
93	1	77	\N	\N	\N	\N
94	2	77	\N	\N	\N	\N
95	1	78	\N	\N	\N	\N
96	2	78	\N	\N	\N	\N
97	1	79	\N	\N	\N	\N
98	2	79	\N	\N	\N	\N
99	1	80	\N	\N	\N	\N
100	2	80	\N	\N	\N	\N
101	1	81	\N	\N	\N	\N
102	2	81	\N	\N	\N	\N
103	1	82	\N	\N	\N	\N
104	2	82	\N	\N	\N	\N
105	1	83	\N	\N	\N	\N
106	2	83	\N	\N	\N	\N
107	1	84	\N	\N	\N	\N
108	2	84	\N	\N	\N	\N
109	1	85	\N	\N	\N	\N
110	2	85	\N	\N	\N	\N
111	1	86	\N	\N	\N	\N
112	2	86	\N	\N	\N	\N
113	1	87	\N	\N	\N	\N
114	2	87	\N	\N	\N	\N
115	1	88	\N	\N	\N	\N
116	2	88	\N	\N	\N	\N
117	1	89	\N	\N	\N	\N
118	2	89	\N	\N	\N	\N
119	1	90	\N	\N	\N	\N
120	2	90	\N	\N	\N	\N
121	1	91	\N	\N	\N	\N
122	2	91	\N	\N	\N	\N
123	1	92	\N	\N	\N	\N
124	2	92	\N	\N	\N	\N
125	1	93	\N	\N	\N	\N
126	2	93	\N	\N	\N	\N
127	1	94	\N	\N	\N	\N
128	2	94	\N	\N	\N	\N
129	1	95	\N	\N	\N	\N
130	2	95	\N	\N	\N	\N
131	1	96	\N	\N	\N	\N
132	2	96	\N	\N	\N	\N
133	1	97	\N	\N	\N	\N
134	2	97	\N	\N	\N	\N
135	1	98	\N	\N	\N	\N
136	2	98	\N	\N	\N	\N
137	1	99	\N	\N	\N	\N
138	2	99	\N	\N	\N	\N
139	1	100	\N	\N	\N	\N
140	2	100	\N	\N	\N	\N
141	1	101	\N	\N	\N	\N
142	2	101	\N	\N	\N	\N
143	1	102	\N	\N	\N	\N
144	2	102	\N	\N	\N	\N
145	1	103	\N	\N	\N	\N
146	2	103	\N	\N	\N	\N
147	1	104	\N	\N	\N	\N
148	2	104	\N	\N	\N	\N
149	1	105	\N	\N	\N	\N
150	2	105	\N	\N	\N	\N
151	1	106	\N	\N	\N	\N
152	2	106	\N	\N	\N	\N
153	1	108	\N	\N	\N	\N
154	2	108	\N	\N	\N	\N
155	1	109	\N	\N	\N	\N
156	2	109	\N	\N	\N	\N
157	1	110	\N	\N	\N	\N
158	2	110	\N	\N	\N	\N
159	1	111	\N	\N	\N	\N
160	2	111	\N	\N	\N	\N
161	1	112	\N	\N	\N	\N
162	2	112	\N	\N	\N	\N
163	1	113	\N	\N	\N	\N
164	2	113	\N	\N	\N	\N
165	1	114	\N	\N	\N	\N
166	2	114	\N	\N	\N	\N
167	1	115	\N	\N	\N	\N
168	2	115	\N	\N	\N	\N
169	1	116	\N	\N	\N	\N
170	2	116	\N	\N	\N	\N
171	1	117	\N	\N	\N	\N
172	2	117	\N	\N	\N	\N
173	1	118	\N	\N	\N	\N
174	2	118	\N	\N	\N	\N
175	1	119	\N	\N	\N	\N
176	2	119	\N	\N	\N	\N
177	1	120	\N	\N	\N	\N
178	2	120	\N	\N	\N	\N
179	1	121	\N	\N	\N	\N
180	2	121	\N	\N	\N	\N
181	1	122	\N	\N	\N	\N
182	2	122	\N	\N	\N	\N
183	1	123	\N	\N	\N	\N
184	2	123	\N	\N	\N	\N
185	1	124	\N	\N	\N	\N
186	2	124	\N	\N	\N	\N
187	1	125	\N	\N	\N	\N
188	2	125	\N	\N	\N	\N
189	1	126	\N	\N	\N	\N
190	2	126	\N	\N	\N	\N
191	1	127	\N	\N	\N	\N
192	2	127	\N	\N	\N	\N
193	21	128	\N	\N	\N	\N
194	22	128	\N	\N	\N	\N
195	21	129	\N	\N	\N	\N
196	22	129	\N	\N	\N	\N
197	21	130	\N	\N	\N	\N
198	22	130	\N	\N	\N	\N
199	21	131	\N	\N	\N	\N
200	22	131	\N	\N	\N	\N
201	13	132	\N	\N	\N	\N
202	14	132	\N	\N	\N	\N
203	21	133	\N	\N	\N	\N
204	22	133	\N	\N	\N	\N
205	21	134	\N	\N	\N	\N
206	22	134	\N	\N	\N	\N
207	21	135	\N	\N	\N	\N
208	22	135	\N	\N	\N	\N
209	21	136	\N	\N	\N	\N
210	22	136	\N	\N	\N	\N
211	21	137	\N	\N	\N	\N
212	22	137	\N	\N	\N	\N
213	21	138	\N	\N	\N	\N
214	22	138	\N	\N	\N	\N
215	21	139	\N	\N	\N	\N
216	22	139	\N	\N	\N	\N
217	25	140	\N	\N	\N	\N
218	26	140	\N	\N	\N	\N
219	21	141	\N	\N	\N	\N
220	22	141	\N	\N	\N	\N
221	21	142	\N	\N	\N	\N
222	22	142	\N	\N	\N	\N
223	40	143	\N	\N	\N	\N
224	41	143	\N	\N	\N	\N
225	40	144	\N	\N	\N	\N
226	41	144	\N	\N	\N	\N
227	5	145	\N	\N	\N	\N
228	6	145	\N	\N	\N	\N
229	21	146	\N	\N	\N	\N
230	22	146	\N	\N	\N	\N
231	2	147	\N	\N	\N	\N
232	1	147	\N	\N	\N	\N
233	1	148	\N	\N	\N	\N
234	2	148	\N	\N	\N	\N
235	2	149	\N	\N	\N	\N
236	1	149	\N	\N	\N	\N
237	1	150	\N	\N	\N	\N
238	2	150	\N	\N	\N	\N
239	1	151	\N	\N	\N	\N
240	2	151	\N	\N	\N	\N
241	1	152	\N	\N	\N	\N
242	2	153	\N	\N	\N	\N
243	1	154	\N	\N	\N	\N
244	3	155	\N	\N	\N	\N
245	4	156	\N	\N	\N	\N
246	2	157	\N	\N	\N	\N
247	1	158	\N	\N	\N	\N
248	1	159	\N	\N	\N	\N
1	1	13	\N	\N	\N	\N
249	1	160	\N	\N	\N	\N
250	2	160	\N	\N	\N	\N
251	1	161	\N	\N	\N	\N
252	2	161	\N	\N	\N	\N
253	1	162	\N	\N	\N	\N
254	2	162	\N	\N	\N	\N
255	1	163	\N	\N	\N	\N
256	2	163	\N	\N	\N	\N
257	1	164	\N	\N	\N	\N
258	2	164	\N	\N	\N	\N
259	1	165	\N	\N	\N	\N
260	2	165	\N	\N	\N	\N
261	1	167	\N	\N	\N	\N
262	2	167	\N	\N	\N	\N
263	1	186	\N	\N	\N	\N
264	4	186	\N	\N	\N	\N
265	5	186	\N	\N	\N	\N
266	1	187	\N	\N	\N	\N
267	4	187	\N	\N	\N	\N
268	5	187	\N	\N	\N	\N
269	4	188	\N	\N	\N	\N
270	3	188	\N	\N	\N	\N
271	3	189	\N	\N	\N	\N
272	4	189	\N	\N	\N	\N
273	60	190	\N	\N	\N	\N
274	61	190	\N	\N	\N	\N
\.


--
-- TOC entry 2649 (class 0 OID 0)
-- Dependencies: 228
-- Name: ciudad_solicitud_ciusol_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('ciudad_solicitud_ciusol_id_seq', 274, true);


--
-- TOC entry 2566 (class 0 OID 16504)
-- Dependencies: 195
-- Data for Name: comision; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY comision (com_id, com_nombre, com_observacion, com_fechadesde, com_horadesde, com_fechahasta, com_horahasta, com_estado) FROM stdin;
2	Agenda en Bruselas                                	Viaje al exterior	2016-06-11	12:32:00	2016-01-12	13:00:00	A
\.


--
-- TOC entry 2650 (class 0 OID 0)
-- Dependencies: 229
-- Name: comision_com_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('comision_com_id_seq', 3, true);


--
-- TOC entry 2567 (class 0 OID 16513)
-- Dependencies: 196
-- Data for Name: departamento; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY departamento (dep_id, ins_id, dep_nombre, dep_siglas, dep_padre, dep_estado) FROM stdin;
1	1	Vicepresidencia	VPR     	0	A
2	1	Secretaría General	SG      	1	A
3	1	Dirección de Auditoría Interna	DAI     	2	A
4	1	Dirección de Gestión Documental y Archivo 	DGDA    	2	A
5	1	Subsecretaría General del Despacho de la Vicepresidencia 	SGDV    	2	A
6	1	Subsecretaría General de la Vicepresidencia	SGV     	2	A
7	1	Subsecretaría General de la Gestión Estratégica y Productiva	SGGEP   	2	A
8	1	Coordinación General de Agenda	CGA     	5	A
9	1	Dirección de Planificación Estratégica de Agenda	DPEA    	8	A
10	1	Dirección de Gestión de Agenda	DGA     	8	A
11	1	Coordinación General de Logística y Protocolo	CGLP    	5	A
12	1	Dirección de Logística	DL      	11	A
13	1	Dirección de Protocolo	DP      	11	A
14	1	Coordinación General de Disposiciones y Contenidos	CGDC    	5	A
15	1	Dirección de Análisis de la Información	DAIN    	14	A
16	1	Dirección De Contenidos Y Discursos Vicepresidenciales	DCDV    	14	A
17	1	Dirección de Disposiciones Presidenciales y  Vicepresidenciales	DDPV    	14	A
18	1	Coordinación General de los Sectores Estratégicos y Productivos	CGSEP   	7	A
19	1	Dirección de Coordinación de los Sectores Estratégicos	DCSE    	18	A
20	1	Dirección de Coordinación del Sector Productivo	DCSP    	18	A
21	1	Coordinación General de Evaluación y Control de los Sectores Estratégicos y Productivos	CGECSEP 	7	A
22	1	Dirección de Evaluación y Control del Sector Estratégico	DECSE   	21	A
23	1	Dirección de Evaluación y Control del Sector Productivo	DECSP   	21	A
24	1	Coordinación General de Atención Ciudadana	CGAC    	6	A
25	1	Coordinación de Estrategia Internacional	CEI     	6	A
26	1	Coordinación General de Planificación y Gestión Estratégica	CGPGE   	6	A
27	1	Dirección de Planificación e Inversión	DPI     	26	A
28	1	Dirección de Seguimiento de Planes, Programas y Proyectos	DSPPP   	26	A
29	1	Dirección de Tecnologías de la Información y Comunicación	DTIC    	26	A
30	1	Dirección de Gestión del Cambio y Cultura Organizacional 	DGCCO   	26	A
31	1	Dirección de Servicios, Procesos y Calidad	DSPC    	26	A
32	1	Subsecretaría De Comunicación	SC      	6	A
33	1	Dirección de Monitoreo y Análisis Prospectivo	DMAP    	32	A
34	1	Dirección de Medios y Relaciones Públicas	DMRP    	32	A
35	1	Dirección de Imagen e Identidad Institucional	DIII    	32	A
36	1	Coordinación General Administrativa Financiera	CGAF    	6	A
37	1	Dirección Administrativa	DA      	36	A
38	1	Dirección Financiera	DF      	36	A
39	1	Dirección de Administración de Recursos Humanos 	DARH    	36	A
40	1	Coordinación General de Asesoría Jurídica 	CGAJ    	6	A
41	1	Dirección de Patrocinio Legal	DPL     	40	A
42	1	Dirección de Asuntos Regulatorios	DARH    	40	A
43	1	Asesores	ASE     	1	A
44	1	Secretaría Técnica del Comité para la Reconstrucción y \nReactivación Productiva 	STCRRE  	1	A
\.


--
-- TOC entry 2651 (class 0 OID 0)
-- Dependencies: 230
-- Name: departamento_dep_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('departamento_dep_id_seq', 1, false);


--
-- TOC entry 2626 (class 0 OID 57657)
-- Dependencies: 255
-- Data for Name: estado_informe; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY estado_informe (estinf_id, estinf_fechasalida, estinf_horasalida, estinf_fechallegada, estinf_horallegada, estinf_actividades, estinf_estado, estinf_rutapdf, estsol_observacion, inf_id) FROM stdin;
\.


--
-- TOC entry 2568 (class 0 OID 16520)
-- Dependencies: 197
-- Data for Name: estado_solicitud; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY estado_solicitud (estsol_id, sol_id, estsol_fechasalida, estsol_horasalida, estsol_fechallegada, estsol_horallegada, estsol_actividades, estsol_estado, estsol_rutapdf, estsol_observacion) FROM stdin;
1	15	2016-06-11	12:32:00	2016-01-12	13:00:00	Agenda en Bruselas	A	pdf/1002455630/DTIC-2016-SAPCSI-BSBE-4.pdf	Viaje al exterior
2	16	2016-06-11	12:32:00	2016-01-12	13:00:00	Agenda en Bruselas	A	pdf/1002455630/DTIC-2016-SAPCSI-BSBE-5.pdf	Viaje al exterior
3	17	2016-06-11	12:32:00	2016-01-12	13:00:00	Agenda en Bruselas	A	pdf/1002455630/DTIC-2016-SAPCSI-BSBE-6.pdf	Viaje al exterior
4	18	2016-06-11	12:32:00	2016-01-12	13:00:00	Agenda en Bruselas	A	pdf/1002455630/DTIC-2016-SAPCSI-BSBE-7.pdf	Viaje al exterior
5	19	2016-06-11	12:32:00	2016-01-12	13:00:00	Agenda en Bruselas	A	pdf/1002455630/DTIC-2016-SAPCSI-BSBE-8.pdf	Viaje al exterior
6	22	2016-06-11	12:32:00	2016-01-12	13:00:00	Agenda en Bruselas	A	pdf/1002455630/DTIC-2016-SAPCSI-BSBE-11.pdf	Viaje al exterior
7	26	2016-06-11	12:32:00	2016-01-12	13:00:00	Agenda en Bruselas	A	pdf/1002455630/DTIC-2016-SAPCSI-BSBE-15.pdf	Viaje al exterior
8	28	2016-06-11	12:32:00	2016-01-12	13:00:00	Agenda en Bruselas	A	pdf/1002455630/DTIC-2016-SAPCSI-BSBE-17.pdf	Viaje al exterior
9	36	2016-06-11	12:32:00	2016-01-12	13:00:00	Agenda en Bruselas	A	pdf/1002455630/DTIC-2016-SAPCSI-BSBE-23.pdf	Viaje al exterior
10	37	2016-06-11	12:32:00	2016-01-12	13:00:00	Agenda en Bruselas	A	pdf/1002455630/DTIC-2016-SAPCSI-BSBE-24.pdf	Viaje al exterior
11	38	2016-06-11	12:32:00	2016-01-12	13:00:00	Agenda en Bruselas	A	pdf/1002455630/DTIC-2016-SAPCSI-BSBE-25.pdf	Viaje al exterior
12	39	2016-06-11	12:32:00	2016-01-12	13:00:00	Agenda en Bruselas	A	pdf/1002455630/DTIC-2016-SAPCSI-BSBE-26.pdf	Viaje al exterior
13	40	2016-06-11	12:32:00	2016-01-12	13:00:00	Agenda en Bruselas	A	pdf/1002455630/DTIC-2016-SAPCSI-BSBE-27.pdf	Viaje al exterior
14	41	2016-06-11	12:32:00	2016-01-12	13:00:00	Agenda en Bruselas	A	pdf/1002455630/DTIC-2016-SAPCSI-BSBE-28.pdf	Viaje al exterior
15	42	2016-06-11	12:32:00	2016-01-12	13:00:00	Agenda en Bruselas	A	pdf/1002455630/DTIC-2016-SAPCSI-BSBE-29.pdf	Viaje al exterior
16	45	2016-06-11	12:32:00	2016-01-12	13:00:00	Agenda en Bruselas	A	pdf/1002455630/DTIC-2016-SAPCSI-BSBE-32.pdf	Viaje al exterior
17	47	2016-06-11	12:32:00	2016-01-12	13:00:00	Agenda en Bruselas	A	pdf/1002455630/DTIC-2016-SAPCSI-BSBE-34.pdf	Viaje al exterior
18	48	2016-06-11	12:32:00	2016-01-12	13:00:00	Agenda en Bruselas	A	pdf/1002455630/DTIC-2016-SAPCSI-BSBE-35.pdf	Viaje al exterior
19	49	2016-06-11	12:32:00	2016-01-12	13:00:00	Agenda en Bruselas	A	pdf/1002455630/DTIC-2016-SAPCSI-BSBE-36.pdf	Viaje al exterior
20	50	2016-06-11	12:32:00	2016-01-12	13:00:00	Agenda en Bruselas	A	pdf/1002455630/DTIC-2016-SAPCSI-BSBE-37.pdf	Viaje al exterior
21	51	2016-06-11	12:32:00	2016-01-12	13:00:00	Agenda en Bruselas	A	pdf/1002455630/DTIC-2016-SAPCSI-BSBE-38.pdf	Viaje al exterior
22	52	2016-06-11	12:32:00	2016-01-12	13:00:00	Agenda en Bruselas	A	pdf/1002455630/DTIC-2016-SAPCSI-BSBE-39.pdf	Viaje al exterior
23	53	2016-06-11	12:32:00	2016-01-12	13:00:00	Agenda en Bruselas	A	pdf/1002455630/DTIC-2016-SAPCSI-BSBE-40.pdf	Viaje al exterior
24	54	2016-06-11	12:32:00	2016-01-12	13:00:00	Agenda en Bruselas	A	pdf/1002455630/DTIC-2016-SAPCSI-BSBE-41.pdf	Viaje al exterior
25	55	2016-06-11	12:32:00	2016-01-12	13:00:00	Agenda en Bruselas	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-1.pdf	Viaje al exterior
27	63	2017-10-01	12:54:54	2017-12-01	03:45:00	<p class="ql-align-center"><strong class="ql-size-large">10/1/2017</strong></p><ul><li>qwerqwer</li></ul><p class="ql-align-center"><strong class="ql-size-large">11/1/2017</strong></p><ul><li>1234</li></ul><p class="ql-align-center"><strong class="ql-size-large">12/1/2017</strong></p><ul><li>09887</li></ul>	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-7.pdf	\N
28	64	2016-06-11	12:32:00	2016-01-12	13:00:00	Agenda en Bruselas	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-8.pdf	Viaje al exterior
29	65	2017-04-01	11:20:33	2017-05-01	04:12:38	<p class="ql-align-center"><strong class="ql-size-large">4/1/2017</strong></p><ul><li>1232312</li></ul><p class="ql-align-center"><strong class="ql-size-large">5/1/2017</strong></p><ul><li>sdfgsgs</li></ul>	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-9.pdf	\N
30	66	2017-05-01	10:30:09	2017-06-01	08:31:12	<p class="ql-align-center"><strong class="ql-size-large">5/1/2017</strong></p><ul><li>tertwert</li></ul><p class="ql-align-center"><strong class="ql-size-large">6/1/2017</strong></p><ul><li>wrtwert</li></ul>	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-10.pdf	\N
31	67	2016-06-11	12:32:00	2016-01-12	13:00:00	Agenda en Bruselas	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-11.pdf	Viaje al exterior
32	68	2017-06-01	12:38:17	2017-07-01	06:31:22	<p class="ql-align-center"><strong class="ql-size-large">6/1/2017</strong></p><ul><li>eert</li></ul><p class="ql-align-center"><strong class="ql-size-large">7/1/2017</strong></p><ul><li>ewtrew</li></ul>	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-12.pdf	\N
33	69	2017-01-09	09:35:43	2017-01-09	09:35:43	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-13.pdf	\N
34	70	2017-01-09	09:37:34	2017-01-09	09:37:34	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-14.pdf	\N
35	71	2017-01-09	09:38:05	2017-01-09	09:38:05	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-15.pdf	\N
36	72	2017-01-09	09:39:07	2017-01-09	09:39:07	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-16.pdf	\N
37	73	2017-01-09	09:40:27	2017-01-09	09:40:27	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-17.pdf	\N
38	74	2017-10-01	14:42:30	2017-11-01	05:51:35	<p class="ql-align-center"><strong class="ql-size-large">10/1/2017</strong></p><ul><li>tertwetr</li></ul><p class="ql-align-center"><strong class="ql-size-large">11/1/2017</strong></p><ul><li>wertwert</li></ul>	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-18.pdf	\N
39	76	2017-01-09	10:03:56	2017-01-09	10:03:56	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-20.pdf	\N
40	77	2017-01-09	11:48:52	2017-01-09	11:48:52	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-21.pdf	\N
41	78	2017-01-09	11:52:16	2017-01-09	11:52:16	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-22.pdf	\N
42	79	2017-01-09	12:05:14	2017-01-09	12:05:14	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-23.pdf	\N
43	80	2017-01-09	12:09:47	2017-01-09	12:09:47	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-24.pdf	\N
44	81	2017-01-09	12:12:13	2017-01-09	12:12:13	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-25.pdf	\N
45	82	2017-01-09	12:15:20	2017-01-09	12:15:20	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-26.pdf	\N
46	83	2017-01-09	12:16:45	2017-01-09	12:16:45	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-27.pdf	\N
47	84	2017-01-09	12:17:33	2017-01-09	12:17:33	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-28.pdf	\N
48	85	2017-01-09	12:18:18	2017-01-09	12:18:18	\N	c	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-29.pdf	\N
49	86	2017-01-09	12:20:28	2017-01-09	12:20:28	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-30.pdf	\N
50	87	2017-01-09	12:20:43	2017-01-09	12:20:43	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-31.pdf	\N
51	88	2017-01-09	12:21:14	2017-01-09	12:21:14	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-32.pdf	\N
52	91	2017-01-09	12:42:58	2017-01-09	12:42:58	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-35.pdf	\N
53	92	2017-01-09	12:44:25	2017-01-09	12:44:25	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-36.pdf	\N
54	93	2017-11-01	15:48:53	2017-12-01	21:41:58	<p class="ql-align-center"><strong class="ql-size-large">11/1/2017</strong></p><ul><li>fsssfsf</li></ul><p class="ql-align-center"><strong class="ql-size-large">12/1/2017</strong></p><ul><li>tretetre</li></ul>	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-37.pdf	\N
55	94	2017-12-01	16:04:21	2017-12-01	10:04:27	<p class="ql-align-center"><strong class="ql-size-large">12/1/2017</strong></p><ul><li>rdhdfghdgf</li></ul>	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-38.pdf	\N
56	97	2017-01-09	13:45:27	2017-01-09	13:45:27	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-41.pdf	\N
57	100	2017-01-09	14:14:06	2017-01-09	14:14:06	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-44.pdf	\N
58	102	2017-04-01	16:18:31	2017-07-01	12:16:36	<p class="ql-align-center"><strong class="ql-size-large">4/1/2017</strong></p><ul><li>dasfdasd</li></ul><p class="ql-align-center"><strong class="ql-size-large">5/1/2017</strong></p><ul><li>adfasd</li></ul><p class="ql-align-center"><strong class="ql-size-large">6/1/2017</strong></p><ul><li>adfasd</li></ul><p class="ql-align-center"><strong class="ql-size-large">7/1/2017</strong></p><ul><li>asdfasdf</li></ul>	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-46.pdf	\N
59	104	2017-01-10	23:05:05	2017-01-10	23:05:05	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-48.pdf	\N
60	105	2017-01-10	23:07:13	2017-01-10	23:07:13	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-49.pdf	\N
61	106	2017-01-10	23:10:17	2017-01-10	23:10:17	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-50.pdf	\N
62	107	2017-01-10	23:11:01	2017-01-10	23:11:01	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-51.pdf	\N
63	108	2017-01-10	23:14:56	2017-01-10	23:14:56	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-52.pdf	\N
64	109	2017-01-10	23:22:24	2017-01-10	23:22:24	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-53.pdf	\N
65	110	2017-01-10	23:28:26	2017-01-10	23:28:26	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-54.pdf	\N
66	111	2017-01-10	23:30:05	2017-01-10	23:30:05	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-55.pdf	\N
67	112	2017-06-01	09:36:18	2017-09-01	10:37:21	<p class="ql-align-center"><strong class="ql-size-large">6/1/2017</strong></p><ul><li>asfasdf</li></ul><p class="ql-align-center"><strong class="ql-size-large">7/1/2017</strong></p><ul><li>adfasdf</li></ul><p class="ql-align-center"><strong class="ql-size-large">8/1/2017</strong></p><ul><li>2423423</li></ul><p class="ql-align-center"><strong class="ql-size-large">9/1/2017</strong></p><ul><li>ffsfg3453</li></ul>	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-56.pdf	\N
68	113	2017-01-11	08:41:15	2017-01-11	08:41:15	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-57.pdf	\N
69	114	2017-01-11	08:48:56	2017-01-11	08:48:56	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-58.pdf	\N
70	115	2017-01-11	08:49:47	2017-01-11	08:49:47	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-59.pdf	\N
71	116	2017-01-11	08:50:40	2017-01-11	08:50:40	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-60.pdf	\N
72	117	2017-01-11	08:53:08	2017-01-11	08:53:08	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-61.pdf	\N
73	118	2017-01-11	08:53:54	2017-01-11	08:53:54	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-62.pdf	\N
74	119	2017-01-11	08:56:33	2017-01-11	08:56:33	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-63.pdf	\N
75	120	2017-01-11	09:02:16	2017-01-11	09:02:16	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-64.pdf	\N
76	121	2017-01-11	09:02:58	2017-01-11	09:02:58	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-65.pdf	\N
77	122	2017-01-11	09:04:49	2017-01-11	09:04:49	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-66.pdf	\N
78	123	2017-01-11	09:10:56	2017-01-11	09:10:56	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-67.pdf	\N
79	124	2017-01-11	09:13:31	2017-01-11	09:13:31	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-68.pdf	\N
80	125	2017-01-11	09:23:37	2017-01-11	09:23:37	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-69.pdf	\N
81	127	2017-01-11	09:29:07	2017-01-11	09:29:07	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-71.pdf	\N
82	128	2017-01-11	09:29:43	2017-01-11	09:29:43	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-72.pdf	\N
83	131	2017-01-11	09:42:56	2017-01-11	09:42:56	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-75.pdf	\N
84	132	2017-01-11	09:46:30	2017-01-11	09:46:30	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-76.pdf	\N
85	133	2017-01-11	09:57:28	2017-01-11	09:57:28	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-77.pdf	\N
86	134	2017-01-11	10:05:20	2017-01-11	10:05:20	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-78.pdf	\N
87	135	2017-01-11	10:09:28	2017-01-11	10:09:28	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-79.pdf	\N
88	136	2017-01-11	10:16:28	2017-01-11	10:16:28	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-80.pdf	\N
89	137	2017-01-11	10:33:01	2017-01-11	10:33:01	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-81.pdf	\N
90	138	2017-01-11	10:33:34	2017-01-11	10:33:34	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-82.pdf	\N
91	139	2017-01-11	10:37:06	2017-01-11	10:37:06	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-83.pdf	\N
92	140	2017-01-11	10:39:06	2017-01-11	10:39:06	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-84.pdf	\N
93	141	2017-01-11	10:40:08	2017-01-11	10:40:08	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-85.pdf	\N
94	142	2017-01-11	10:41:26	2017-01-11	10:41:26	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-86.pdf	\N
95	143	2017-01-11	10:42:32	2017-01-11	10:42:32	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-87.pdf	\N
96	144	2017-01-11	10:43:31	2017-01-11	10:43:31	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-88.pdf	\N
97	145	2017-01-11	10:44:17	2017-01-11	10:44:17	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-89.pdf	\N
98	146	2017-01-11	11:31:57	2017-01-11	11:31:57	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-90.pdf	\N
99	147	2017-01-11	11:56:08	2017-01-11	11:56:08	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-91.pdf	\N
100	148	2017-01-11	11:57:41	2017-01-11	11:57:41	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-92.pdf	\N
101	149	2017-01-11	12:04:54	2017-01-11	12:04:54	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-93.pdf	\N
102	150	2017-01-11	12:26:18	2017-01-11	12:26:18	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-94.pdf	\N
103	151	2017-01-11	12:27:35	2017-01-11	12:27:35	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-95.pdf	\N
104	152	2017-01-11	12:28:51	2017-01-11	12:28:51	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-96.pdf	\N
105	153	2017-01-11	12:31:54	2017-01-11	12:31:54	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-97.pdf	\N
106	154	2017-01-11	12:32:36	2017-01-11	12:32:36	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-98.pdf	\N
107	155	2017-01-11	12:36:10	2017-01-11	12:36:10	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-99.pdf	\N
108	156	2017-01-11	12:37:15	2017-01-11	12:37:15	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-100.pdf	\N
109	157	2017-01-11	12:39:00	2017-01-11	12:39:00	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-101.pdf	\N
110	158	2017-01-11	12:40:21	2017-01-11	12:40:21	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-102.pdf	\N
111	159	2017-01-11	12:42:21	2017-01-11	12:42:21	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-103.pdf	\N
112	160	2017-01-11	12:44:38	2017-01-11	12:44:38	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-104.pdf	\N
113	161	2017-01-11	12:46:10	2017-01-11	12:46:10	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-105.pdf	\N
114	162	2017-01-11	12:47:45	2017-01-11	12:47:45	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-106.pdf	\N
115	163	2017-01-11	12:49:26	2017-01-11	12:49:26	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-107.pdf	\N
116	164	2017-01-11	12:51:43	2017-01-11	12:51:43	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-108.pdf	\N
117	165	2017-01-11	12:52:35	2017-01-11	12:52:35	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-109.pdf	\N
118	166	2017-01-11	12:54:38	2017-01-11	12:54:38	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-110.pdf	\N
119	167	2017-01-11	12:55:23	2017-01-11	12:55:23	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-111.pdf	\N
120	168	2017-01-11	12:56:21	2017-01-11	12:56:21	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-112.pdf	\N
121	169	2017-01-11	12:56:58	2017-01-11	12:56:58	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-113.pdf	\N
122	170	2017-01-11	12:57:17	2017-01-11	12:57:17	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-114.pdf	\N
123	171	2017-01-11	12:59:30	2017-01-11	12:59:30	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-115.pdf	\N
124	172	2017-01-11	13:09:58	2017-01-11	13:09:58	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-116.pdf	\N
125	173	2017-01-11	13:11:26	2017-01-11	13:11:26	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-117.pdf	\N
126	174	2017-01-11	13:19:00	2017-01-11	13:19:00	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-118.pdf	\N
127	175	2017-01-11	13:20:45	2017-01-11	13:20:45	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-119.pdf	\N
128	183	2017-01-11	14:59:11	2017-01-11	14:59:11	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-124.pdf	\N
129	184	2017-01-11	15:08:42	2017-01-11	15:08:42	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-125.pdf	\N
130	185	2017-01-11	15:10:45	2017-01-11	15:10:45	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-126.pdf	\N
131	186	2017-01-11	15:10:57	2017-01-11	15:10:57	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-127.pdf	\N
132	187	2017-01-12	14:03:16	2017-01-14	14:04:20	<p class="ql-align-center"><strong class="ql-size-large">12/1/2017</strong></p><ul><li>wrwer</li></ul><p class="ql-align-center"><strong class="ql-size-large">13/1/2017</strong></p><ul><li>werwer</li></ul><p class="ql-align-center"><strong class="ql-size-large">14/1/2017</strong></p><ul><li>werwer</li></ul>	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-128.pdf	\N
133	188	2017-01-11	16:15:40	2017-01-11	16:15:40	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-129.pdf	\N
134	189	2017-01-11	16:16:23	2017-01-11	16:16:23	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-130.pdf	\N
135	190	2017-01-11	16:17:09	2017-01-11	16:17:09	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-131.pdf	\N
136	191	2017-01-11	16:17:56	2017-01-11	16:17:56	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-132.pdf	\N
137	192	2017-01-11	16:22:56	2017-01-11	16:22:56	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-133.pdf	\N
138	193	2017-01-11	16:23:19	2017-01-11	16:23:19	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-134.pdf	\N
139	194	2017-01-11	16:23:30	2017-01-11	16:23:30	\N	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-135.pdf	\N
140	195	2017-01-31	08:25:18	2017-02-04	08:25:31	<p class="ql-align-center"><strong class="ql-size-large">31/1/2017</strong></p><ul><li>jhkk</li></ul><p class="ql-align-center"><strong class="ql-size-large">1/2/2017</strong></p><ul><li>iououou</li></ul><p class="ql-align-center"><strong class="ql-size-large">2/2/2017</strong></p><ul><li>97987</li></ul><p class="ql-align-center"><strong class="ql-size-large">3/2/2017</strong></p><ul><li>ghdtfdudu7</li></ul><p class="ql-align-center"><strong class="ql-size-large">4/2/2017</strong></p><ul><li>534346768</li></ul>	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-136.pdf	\N
141	196	2017-01-11	16:33:38	2017-01-11	16:33:38	\N	A	pdf/1713848214/DTIC-2017-SAPCSI-PDGS-1.pdf	\N
142	197	2017-01-11	16:35:02	2017-01-11	16:35:02	\N	A	pdf/1713848214/DTIC-2017-SAPCSI-PDGS-2.pdf	\N
143	198	2017-01-12	17:39:29	2017-01-19	15:37:34	<p class="ql-align-center"><strong class="ql-size-large">12/1/2017</strong></p><ul><li>fdsad</li></ul><p class="ql-align-center"><strong class="ql-size-large">13/1/2017</strong></p><ul><li>asdfas</li></ul><p class="ql-align-center"><strong class="ql-size-large">14/1/2017</strong></p><ul><li>sadfasd</li></ul><p class="ql-align-center"><strong class="ql-size-large">15/1/2017</strong></p><ul><li>asdfasd</li></ul><p class="ql-align-center"><strong class="ql-size-large">16/1/2017</strong></p><ul><li>erwerw</li></ul><p class="ql-align-center"><strong class="ql-size-large">17/1/2017</strong></p><ul><li>434234</li></ul><p class="ql-align-center"><strong class="ql-size-large">18/1/2017</strong></p><ul><li>2342342</li></ul><p class="ql-align-center"><strong class="ql-size-large">19/1/2017</strong></p><ul><li>jhkgfjgh</li></ul>	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-137.pdf	\N
144	199	2017-01-12	17:39:29	2017-01-19	15:37:34	<p class="ql-align-center"><strong class="ql-size-large">12/1/2017</strong></p><ul><li>fdsad</li></ul><p class="ql-align-center"><strong class="ql-size-large">13/1/2017</strong></p><ul><li>asdfas</li></ul><p class="ql-align-center"><strong class="ql-size-large">14/1/2017</strong></p><ul><li>sadfasd</li></ul><p class="ql-align-center"><strong class="ql-size-large">15/1/2017</strong></p><ul><li>asdfasd</li></ul><p class="ql-align-center"><strong class="ql-size-large">16/1/2017</strong></p><ul><li>erwerw</li></ul><p class="ql-align-center"><strong class="ql-size-large">17/1/2017</strong></p><ul><li>434234</li></ul><p class="ql-align-center"><strong class="ql-size-large">18/1/2017</strong></p><ul><li>2342342</li></ul><p class="ql-align-center"><strong class="ql-size-large">19/1/2017</strong></p><ul><li>jhkgfjgh</li></ul>	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-138.pdf	\N
145	200	2017-01-20	09:51:45	2017-01-21	07:49:50	<p class="ql-align-center"><strong class="ql-size-large">20/1/2017</strong></p><ul><li>dgas</li></ul><p class="ql-align-center"><strong class="ql-size-large">21/1/2017</strong></p><ul><li>sgsdgs</li></ul>	A	pdf/1103437818/DSPC-2017-SAPCSI-SPVA-1.pdf	\N
146	201	2017-01-24	13:09:14	2017-01-24	13:09:14	\N	A	pdf/1713848214/DTIC-2017-SAPCSI-PDGS-3.pdf	\N
147	203	2017-01-25	10:16:50	2017-01-29	17:24:55	<p class="ql-align-center"><strong class="ql-size-large">25/1/2017</strong></p><ul><li>sdfasdf</li></ul><p class="ql-align-center"><strong class="ql-size-large">26/1/2017</strong></p><ul><li>dasdfasdf</li></ul><p class="ql-align-center"><strong class="ql-size-large">27/1/2017</strong></p><ul><li>adfasdfas</li></ul><p class="ql-align-center"><strong class="ql-size-large">28/1/2017</strong></p><ul><li>adfasdfas</li></ul><p class="ql-align-center"><strong class="ql-size-large">29/1/2017</strong></p><ul><li>adsfasdfa</li></ul>	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-139.pdf	\N
148	204	2017-01-30	16:32:48	2017-02-04	08:22:57	<p class="ql-align-center"><strong class="ql-size-large">30/1/2017</strong></p><ul><li>dadas</li></ul><p class="ql-align-center"><strong class="ql-size-large">31/1/2017</strong></p><ul><li>dasdfas</li></ul><p class="ql-align-center"><strong class="ql-size-large">1/2/2017</strong></p><ul><li>adfasdfa</li></ul><p class="ql-align-center"><strong class="ql-size-large">2/2/2017</strong></p><ul><li>adfasdasf</li></ul><p class="ql-align-center"><strong class="ql-size-large">3/2/2017</strong></p><ul><li>3313121</li></ul><p class="ql-align-center"><strong class="ql-size-large">4/2/2017</strong></p><ul><li>adasdfasd</li></ul>	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-140.pdf	\N
149	205	2017-01-25	15:33:17	2017-01-26	09:31:22	<p class="ql-align-center"><strong class="ql-size-large">25/1/2017</strong></p><ul><li>hkjh</li></ul><p class="ql-align-center"><strong class="ql-size-large">26/1/2017</strong></p><ul><li>rytyut</li></ul>	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-141.pdf	\N
150	206	2017-02-01	16:50:23	2017-02-05	11:44:25	<p class="ql-align-center"><strong class="ql-size-large">1/2/2017</strong></p><ul><li>afasfasfasdfadf</li></ul><p class="ql-align-center"><strong class="ql-size-large">2/2/2017</strong></p><ul><li>asdfasdfasdfasf</li></ul><p class="ql-align-center"><strong class="ql-size-large">3/2/2017</strong></p><ul><li>asfasdfwerwrerw5</li></ul><p class="ql-align-center"><strong class="ql-size-large">4/2/2017</strong></p><ul><li>2423423423432</li></ul><p class="ql-align-center"><strong class="ql-size-large">5/2/2017</strong></p><ul><li> d yyewad</li></ul>	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-142.pdf	\N
151	208	2017-02-01	17:05:30	2017-02-05	15:05:35	<p class="ql-align-center"><strong class="ql-size-large">1/2/2017</strong></p><ul><li>dfasdfasdf</li></ul><p class="ql-align-center"><strong class="ql-size-large">2/2/2017</strong></p><ul><li>dfadfad</li></ul><p class="ql-align-center"><strong class="ql-size-large">3/2/2017</strong></p><ul><li>adfasdf</li></ul><p class="ql-align-center"><strong class="ql-size-large">4/2/2017</strong></p><ul><li>adfasdf</li></ul><p class="ql-align-center"><strong class="ql-size-large">5/2/2017</strong></p><ul><li>adfasda</li></ul>	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-144.pdf	\N
152	209	2017-01-19	15:13:53	2017-01-22	17:15:57	<p class="ql-align-center"><strong class="ql-size-large">19/1/2017</strong></p><ul><li>tgsdgs</li></ul><p class="ql-align-center"><strong class="ql-size-large">20/1/2017</strong></p><ul><li>gssggf</li></ul><p class="ql-align-center"><strong class="ql-size-large">21/1/2017</strong></p><ul><li>sfgsdfg</li></ul><p class="ql-align-center"><strong class="ql-size-large">22/1/2017</strong></p><ul><li>sfgsdfg</li></ul>	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-145.pdf	\N
153	210	2017-01-07	17:18:56	2017-01-11	16:17:58	<p class="ql-align-center"><strong class="ql-size-large">7/1/2017</strong></p><ul><li>sdfasd</li></ul><p class="ql-align-center"><strong class="ql-size-large">8/1/2017</strong></p><ul><li>adafsd</li></ul><p class="ql-align-center"><strong class="ql-size-large">9/1/2017</strong></p><ul><li>adfasdf</li></ul><p class="ql-align-center"><strong class="ql-size-large">10/1/2017</strong></p><ul><li>adfasdf</li></ul><p class="ql-align-center"><strong class="ql-size-large">11/1/2017</strong></p><ul><li>asdfasdfas</li></ul>	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-146.pdf	\N
154	211	2017-01-26	15:34:51	2017-01-28	21:35:57	<p class="ql-align-center"><strong class="ql-size-large">26/1/2017</strong></p><ul><li>dfasdfasdfa</li></ul><p class="ql-align-center"><strong class="ql-size-large">27/1/2017</strong></p><ul><li>adfasdfasd</li></ul><p class="ql-align-center"><strong class="ql-size-large">28/1/2017</strong></p><ul><li>adfasdfasd</li></ul>	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-147.pdf	\N
155	212	2017-01-26	17:40:22	2017-01-29	14:40:24	<p class="ql-align-center"><strong class="ql-size-large">26/1/2017</strong></p><ul><li>sfad</li></ul><p class="ql-align-center"><strong class="ql-size-large">27/1/2017</strong></p><ul><li>asdfas</li></ul><p class="ql-align-center"><strong class="ql-size-large">28/1/2017</strong></p><ul><li>asdfasd</li></ul><p class="ql-align-center"><strong class="ql-size-large">29/1/2017</strong></p><ul><li>asdfas</li></ul>	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-148.pdf	\N
156	213	2017-01-27	16:40:34	2017-01-29	22:42:38	<p class="ql-align-center"><strong class="ql-size-large">27/1/2017</strong></p><ul><li>hola eslkjklsadjf</li></ul><p class="ql-align-center"><strong class="ql-size-large">28/1/2017</strong></p><ul><li>ljkldfjklaioie0033</li></ul><p class="ql-align-center"><strong class="ql-size-large">29/1/2017</strong></p><ul><li>jkjlakljd0349</li></ul>	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-149.pdf	\N
158	217	2017-02-02	23:36:13	2017-05-02	21:36:15	<p class="ql-align-center"><strong class="ql-size-large">2/2/2017</strong></p><ul><li>ddfasdf</li></ul><p class="ql-align-center"><strong class="ql-size-large">3/2/2017</strong></p><ul><li>dfasdfas</li></ul><p class="ql-align-center"><strong class="ql-size-large">4/2/2017</strong></p><ul><li>ertqrqwer</li></ul><p class="ql-align-center"><strong class="ql-size-large">5/2/2017</strong></p><ul><li>q34245345</li></ul>	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-153.pdf	\N
159	218	2017-02-02	23:36:13	2017-05-02	21:36:15	<p class="ql-align-center"><strong class="ql-size-large">2/2/2017</strong></p><ul><li>ddfasdf</li></ul><p class="ql-align-center"><strong class="ql-size-large">3/2/2017</strong></p><ul><li>dfasdfas</li></ul><p class="ql-align-center"><strong class="ql-size-large">4/2/2017</strong></p><ul><li>ertqrqwer</li></ul><p class="ql-align-center"><strong class="ql-size-large">5/2/2017</strong></p><ul><li>q34245345</li></ul>	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-154.pdf	\N
157	216	2017-09-02	11:53:59	2017-10-02	09:51:02	<span class="ql-align-center"><strong class="ql-size-large">9/2/2017</strong></span><ul><li>sdvzzxvc</li></ul><span class="ql-align-center"><strong class="ql-size-large">10/2/2017</strong></span><ul><li>zxcvergfsdv</li></ul>	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-152.pdf	\N
26	62	2017-09-01	12:52:01	2017-11-01	00:01:06	<p class="centrado"><strong class="centrado">9/1/2017</strong></p><ul><li>Prueba de sonido en equipos</li></ul><p class="ql-align-center"><strong class="ql-size-large">10/1/2017</strong></p><ul><li>Instalación de teleprompter</li></ul><p class="ql-align-center"><strong class="ql-size-large">11/1/2017</strong></p><ul><li>Oficina en Manabí</li></ul>	A	pdf/1002455630/DTIC-2017-SAPCSI-BSBE-6.pdf	\N
163	227	2017-02-15	16:50:02	2017-02-19	14:48:07	<p class="centrado ql-align-center"><strong>15/2/2017</strong></p><ul><li>sda</li></ul><p class="centrado ql-align-center"><strong>16/2/2017</strong></p><ul><li>asdfasd</li></ul><p class="centrado ql-align-center"><strong>17/2/2017</strong></p><ul><li>rer2342</li></ul><p class="centrado ql-align-center"><strong>18/2/2017</strong></p><ul><li>dfasdfasdf</li></ul><p class="centrado ql-align-center"><strong>19/2/2017</strong></p><ul><li>3452345234</li></ul>	A	pdf/1713848214/DTIC-2017-SAPCSI-PDGS-11.pdf	\N
164	228	2017-02-15	16:50:02	2017-02-19	14:48:07	<p class="centrado ql-align-center"><strong>15/2/2017</strong></p><ul><li>sda</li></ul><p class="centrado ql-align-center"><strong>16/2/2017</strong></p><ul><li>asdfasd</li></ul><p class="centrado ql-align-center"><strong>17/2/2017</strong></p><ul><li>rer2342</li></ul><p class="centrado ql-align-center"><strong>18/2/2017</strong></p><ul><li>dfasdfasdf</li></ul><p class="centrado ql-align-center"><strong>19/2/2017</strong></p><ul><li>3452345234</li></ul>	A	pdf/1713848214/DTIC-2017-SAPCSI-PDGS-12.pdf	\N
165	229	2017-02-15	16:50:02	2017-02-19	14:48:07	<p class="centrado ql-align-center"><strong>15/2/2017</strong></p><ul><li>sda</li></ul><p class="centrado ql-align-center"><strong>16/2/2017</strong></p><ul><li>asdfasd</li></ul><p class="centrado ql-align-center"><strong>17/2/2017</strong></p><ul><li>rer2342</li></ul><p class="centrado ql-align-center"><strong>18/2/2017</strong></p><ul><li>dfasdfasdf</li></ul><p class="centrado ql-align-center"><strong>19/2/2017</strong></p><ul><li>3452345234</li></ul>	A	pdf/1713848214/DTIC-2017-SAPCSI-PDGS-13.pdf	\N
166	231	2017-02-15	16:50:02	2017-02-19	14:48:07	<p class="centrado ql-align-center"><strong>15/2/2017</strong></p><ul><li>sda</li></ul><p class="centrado ql-align-center"><strong>16/2/2017</strong></p><ul><li>asdfasd</li></ul><p class="centrado ql-align-center"><strong>17/2/2017</strong></p><ul><li>rer2342</li></ul><p class="centrado ql-align-center"><strong>18/2/2017</strong></p><ul><li>dfasdfasdf</li></ul><p class="centrado ql-align-center"><strong>19/2/2017</strong></p><ul><li>3452345234</li></ul>	A	pdf/1713848214/DTIC-2017-SAPCSI-PDGS-15.pdf	\N
167	232	2017-02-15	16:50:02	2017-02-19	14:48:07	<p class="centrado ql-align-center"><strong>15/2/2017</strong></p><ul><li>sda</li></ul><p class="centrado ql-align-center"><strong>16/2/2017</strong></p><ul><li>asdfasd</li></ul><p class="centrado ql-align-center"><strong>17/2/2017</strong></p><ul><li>rer2342</li></ul><p class="centrado ql-align-center"><strong>18/2/2017</strong></p><ul><li>dfasdfasdf</li></ul><p class="centrado ql-align-center"><strong>19/2/2017</strong></p><ul><li>3452345234</li></ul>	A	pdf/1713848214/DTIC-2017-SAPCSI-PDGS-16.pdf	\N
174	253	\N	\N	\N	\N	<p class="centrado ql-align-center"><strong>15/2/2017</strong></p><ul><li>sda</li></ul><p class="centrado ql-align-center"><strong>16/2/2017</strong></p><ul><li>asdfasd</li></ul><p class="centrado ql-align-center"><strong>17/2/2017</strong></p><ul><li>rer2342</li></ul><p class="centrado ql-align-center"><strong>18/2/2017</strong></p><ul><li>dfasdfasdf</li></ul><p class="centrado ql-align-center"><strong>19/2/2017</strong></p><ul><li>3452345234</li></ul>	A	pdf/1710718477/DTIC-2017-SAPCSI-DAGS-22.pdf	\N
186	275	2017-02-17	12:27:41	2017-02-19	08:21:43	<p class="centrado ql-align-center"><strong>15/2/2017</strong></p><ul><li>sda</li></ul><p class="centrado ql-align-center"><strong>16/2/2017</strong></p><ul><li>asdfasd</li></ul><p class="centrado ql-align-center"><strong>17/2/2017</strong></p><ul><li>rer2342</li></ul><p class="centrado ql-align-center"><strong>18/2/2017</strong></p><ul><li>dfasdfasdf</li></ul><p class="centrado ql-align-center"><strong>19/2/2017</strong></p><ul><li>3452345234</li></ul>	A	pdf/1710718477/DTIC-2017-SAPCSI-DAGS-44.pdf	\N
187	276	2017-02-17	12:27:41	2017-02-19	08:21:43	<p class="centrado ql-align-center"><strong>15/2/2017</strong></p><ul><li>sda</li></ul><p class="centrado ql-align-center"><strong>16/2/2017</strong></p><ul><li>asdfasd</li></ul><p class="centrado ql-align-center"><strong>17/2/2017</strong></p><ul><li>rer2342</li></ul><p class="centrado ql-align-center"><strong>18/2/2017</strong></p><ul><li>dfasdfasdf</li></ul><p class="centrado ql-align-center"><strong>19/2/2017</strong></p><ul><li>3452345234</li></ul>	A	pdf/1710718477/DTIC-2017-SAPCSI-DAGS-45.pdf	\N
188	277	2017-02-17	15:52:48	2017-02-20	17:54:50	<p class="centrado ql-align-center"><strong>15/2/2017</strong></p><ul><li>sda</li></ul><p class="centrado ql-align-center"><strong>16/2/2017</strong></p><ul><li>asdfasd</li></ul><p class="centrado ql-align-center"><strong>17/2/2017</strong></p><ul><li>rer2342</li></ul><p class="centrado ql-align-center"><strong>18/2/2017</strong></p><ul><li>dfasdfasdf</li></ul><p class="centrado ql-align-center"><strong>19/2/2017</strong></p><ul><li>3452345234</li></ul>	A	pdf/1710718477/DTIC-2017-SAPCSI-DAGS-46.pdf	\N
189	278	2017-02-18	10:22:18	2017-02-20	08:20:20	<p class="centrado ql-align-center"><strong>15/2/2017</strong></p><ul><li>sda</li></ul><p class="centrado ql-align-center"><strong>16/2/2017</strong></p><ul><li>asdfasd</li></ul><p class="centrado ql-align-center"><strong>17/2/2017</strong></p><ul><li>rer2342</li></ul><p class="centrado ql-align-center"><strong>18/2/2017</strong></p><ul><li>dfasdfasdf</li></ul><p class="centrado ql-align-center"><strong>19/2/2017</strong></p><ul><li>3452345234</li></ul>	A	pdf/1712926169/DTIC-2017-SAPCSI-PWAS-1.pdf	\N
190	279	2017-02-21	14:23:02	2017-02-25	03:23:04	<p class="centrado ql-align-center"><strong>15/2/2017</strong></p><ul><li>sda</li></ul><p class="centrado ql-align-center"><strong>16/2/2017</strong></p><ul><li>asdfasd</li></ul><p class="centrado ql-align-center"><strong>17/2/2017</strong></p><ul><li>rer2342</li></ul><p class="centrado ql-align-center"><strong>18/2/2017</strong></p><ul><li>dfasdfasdf</li></ul><p class="centrado ql-align-center"><strong>19/2/2017</strong></p><ul><li>3452345234</li></ul>	A	pdf/1712926169/DTIC-2017-SAPCSI-PWAS-2.pdf	\N
162	226	2017-02-15	16:50:02	2017-02-19	14:48:07	<p class="centrado ql-align-center"><strong>15/2/2017</strong></p><ul><li>sda</li></ul><p class="centrado ql-align-center"><strong>16/2/2017</strong></p><ul><li>asdfasd</li></ul><p class="centrado ql-align-center"><strong>17/2/2017</strong></p><ul><li>rer2342</li></ul><p class="centrado ql-align-center"><strong>18/2/2017</strong></p><ul><li>dfasdfasdf</li></ul><p class="centrado ql-align-center"><strong>19/2/2017</strong></p><ul><li>3452345234</li></ul>	A	pdf/1713848214/DTIC-2017-SAPCSI-PDGS-10.pdf	\N
160	224	2017-02-15	16:50:02	2017-02-19	14:48:07	<p class="centrado ql-align-center"><strong>15/2/2017</strong></p><ul><li>sda</li></ul><p class="centrado ql-align-center"><strong>16/2/2017</strong></p><ul><li>asdfasd</li></ul><p class="centrado ql-align-center"><strong>17/2/2017</strong></p><ul><li>rer2342</li></ul><p class="centrado ql-align-center"><strong>18/2/2017</strong></p><ul><li>dfasdfasdf</li></ul><p class="centrado ql-align-center"><strong>19/2/2017</strong></p><ul><li>3452345234</li></ul>	A	pdf/1713848214/DTIC-2017-SAPCSI-PDGS-8.pdf	\N
161	225	2017-02-15	16:50:02	2017-02-19	14:48:07	<p class="centrado ql-align-center"><strong>15/2/2017</strong></p><ul><li>sda</li></ul><p class="centrado ql-align-center"><strong>16/2/2017</strong></p><ul><li>asdfasd</li></ul><p class="centrado ql-align-center"><strong>17/2/2017</strong></p><ul><li>rer2342</li></ul><p class="centrado ql-align-center"><strong>18/2/2017</strong></p><ul><li>dfasdfasdf</li></ul><p class="centrado ql-align-center"><strong>19/2/2017</strong></p><ul><li>3452345234</li></ul>\r\n<p class="centrado ql-align-center"><strong>15/2/2017</strong></p><ul><li>sda</li></ul><p class="centrado ql-align-center"><strong>16/2/2017</strong></p><ul><li>asdfasd</li></ul><p class="centrado ql-align-center"><strong>17/2/2017</strong></p><ul><li>rer2342</li></ul><p class="centrado ql-align-center"><strong>18/2/2017</strong></p><ul><li>dfasdfasdf</li></ul><p class="centrado ql-align-center"><strong>19/2/2017</strong></p><ul><li>3452345234</li></ul>	A	pdf/1713848214/DTIC-2017-SAPCSI-PDGS-9.pdf	\N
185	274	2017-02-17	12:27:41	2017-02-19	08:21:43	<p class="centrado ql-align-center"><strong>15/2/2017</strong></p><ul><li>sda</li></ul><p class="centrado ql-align-center"><strong>16/2/2017</strong></p><ul><li>asdfasd</li></ul><p class="centrado ql-align-center"><strong>17/2/2017</strong></p><ul><li>rer2342</li></ul><p class="centrado ql-align-center"><strong>18/2/2017</strong></p><ul><li>dfasdfasdf</li></ul><p class="centrado ql-align-center"><strong>19/2/2017</strong></p><ul><li>3452345234</li></ul>	A	pdf/1710718477/DTIC-2017-SAPCSI-DAGS-43.pdf	\N
\.


--
-- TOC entry 2652 (class 0 OID 0)
-- Dependencies: 231
-- Name: estado_solicitud_estsol_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('estado_solicitud_estsol_id_seq', 190, true);


--
-- TOC entry 2569 (class 0 OID 16530)
-- Dependencies: 198
-- Data for Name: fondo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY fondo (fon_id, sol_id, fon_valor, fon_fecha, fon_observacion) FROM stdin;
1	\N	5.5	2016-11-10	\N
2	22	5.5	2016-11-10	\N
3	26	5.5	2016-11-10	\N
4	28	5.5	2016-11-10	\N
5	36	5.5	2016-11-11	\N
6	37	5.5	2016-11-11	\N
7	38	5.5	2016-11-11	\N
8	40	5.5	2016-11-11	\N
9	41	5.5	2016-11-11	\N
10	42	5.5	2016-11-11	\N
11	45	5.5	2016-11-11	\N
12	47	5.5	2016-11-12	\N
13	48	5.5	2016-11-12	\N
14	49	5.5	2016-11-12	\N
15	51	5.5	2016-11-12	\N
16	54	5.5	2016-11-12	\N
\.


--
-- TOC entry 2653 (class 0 OID 0)
-- Dependencies: 232
-- Name: fondo_fon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('fondo_fon_id_seq', 16, true);


--
-- TOC entry 2570 (class 0 OID 16540)
-- Dependencies: 199
-- Data for Name: gasto; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY gasto (gas_id, ciuinf_id, estinf_id, gas_fecha, gas_valor, gas_local, gas_tipodocumento, gas_numerodocumento, gas_concepto) FROM stdin;
\.


--
-- TOC entry 2654 (class 0 OID 0)
-- Dependencies: 233
-- Name: gasto_gas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('gasto_gas_id_seq', 1, false);


--
-- TOC entry 2571 (class 0 OID 16548)
-- Dependencies: 200
-- Data for Name: informe; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY informe (inf_id, sol_id, inf_fecharealizacion, inf_numeroactualizacion, inf_estado, inf_anio) FROM stdin;
\.


--
-- TOC entry 2655 (class 0 OID 0)
-- Dependencies: 234
-- Name: informe_inf_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('informe_inf_id_seq', 1, false);


--
-- TOC entry 2572 (class 0 OID 16559)
-- Dependencies: 201
-- Data for Name: institucion; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY institucion (ins_id, ins_nombre, ins_direccion, ins_logo, ins_estado) FROM stdin;
1	VICEPRESIDENCIA DE LA REPÚBLICA DEL ECUADOR	BENALCAZAR N4-40 Y CHILE	/images/vice_crece.png	A
\.


--
-- TOC entry 2656 (class 0 OID 0)
-- Dependencies: 235
-- Name: institucion_ins_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('institucion_ins_id_seq', 1, false);


--
-- TOC entry 2622 (class 0 OID 49191)
-- Dependencies: 251
-- Data for Name: modrol_carper; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY modrol_carper (mrcp_id, modrol_id, carper_id, mrcp_observacion) FROM stdin;
16	16	80	\N
17	17	80	\N
18	18	80	\N
19	19	80	\N
20	20	80	\N
21	21	80	\N
22	22	80	\N
23	23	80	\N
24	24	80	\N
25	25	80	\N
26	26	80	\N
27	27	80	\N
28	28	80	\N
29	29	80	\N
30	30	80	\N
31	31	80	\N
32	32	80	\N
33	33	80	\N
34	34	80	\N
35	35	80	\N
1	1	30	
2	2	30	
3	3	30	
4	4	30	
5	5	30	\N
6	6	30	\N
7	7	30	\N
8	8	30	\N
9	9	30	\N
10	10	30	\N
11	11	30	\N
12	12	30	\N
13	13	30	\N
14	14	30	\N
15	15	30	\N
\.


--
-- TOC entry 2657 (class 0 OID 0)
-- Dependencies: 252
-- Name: modrol_carper_mrcp_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('modrol_carper_mrcp_id_seq', 1, false);


--
-- TOC entry 2573 (class 0 OID 16568)
-- Dependencies: 202
-- Data for Name: modulo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY modulo (mod_id, mod_nombre, mod_descripcion, mod_ubicacion, mod_padre, mod_estado, mod_nombremostrar) FROM stdin;
17	usuario_listar	item Listar Usuario	/listar_usuario	2	A	Listado                                           
16	usuario_eliminar	item Eliminar Usuario	/eliminar_usuario	2	A	Eliminar                                          
18	rol_nuevo	item Nuevo Rol	/nuevo_rol	3	A	Nuevo                                             
19	rol_modificar	item Modificar Rol	/modificar_rol	3	A	Modificar                                         
20	rol_eliminar	item Eliminar Rol	/eliminar_rol	3	A	Eliminar                                          
21	banco_nuevo	item Nuevo Banco	/nuevo_banco	4	A	Nuevo                                             
22	banco_modificar	item Modificar Banco	/modificar_banco	4	A	Modificar                                         
23	departamento_nuevo	item Nuevo Departamento	/nuevo_departamento	5	A	Nuevo                                             
24	departamento_modificar	item Modificar Departamento	/modificar_departamento	5	A	Modificar                                         
25	departamento_eliminar	item Eliminar Departamento	/eliminar_departamento	5	A	Eliminar                                          
26	vehiculo_nuevo	item Nuevo Vehiculo	/nuevo_vehiculo	6	A	Nuevo                                             
27	vehiculo_modificar	item Modificar Vehiculo	/modificar_vehiculo	6	A	Modificar                                         
28	vehiculo_eliminar	item Elimnar Vehiculo	/eliminar_vehiculo	6	A	Eliminar                                          
29	cargo_nuevo	item Nuevo Cargo	/nuevo_cargo	7	A	Nuevo                                             
30	cargo_modificar	item Modificar Cargo	/modificar_cargo	7	A	Modificar                                         
31	cargo_eliminar	item Eliminar Cargo	/eliminar_cargo	7	A	Eliminar                                          
32	pais_nuevo	item Nuevo Pais	/nuevo_pais	8	A	Nuevo                                             
33	pais_modificar	item Modificar Pais	/modificar_pais	8	A	Modificar                                         
34	pais_eliminar	item Eliminar Pais	/eliminar_pais	8	A	Eliminar                                          
35	provincia_nuevo	item Nuevo Provincia	/nuevo_provincia	9	A	Nuevo                                             
36	provincia_modificar	item Modificar Provincia	/modificar_provincia	9	A	Modificar                                         
37	provincia_eliminar	item Eliminar Provincia	/eliminar_provincia	9	A	Eliminar                                          
38	ciudad_nuevo	item Nuevo Ciudad	/nuevo_ciudad	10	A	Nuevo                                             
39	ciudad_modificar	item Modificar Ciudad	/modificar_ciudad	10	A	Modificar                                         
40	ciudad_eliminar	item Eliminar Ciudad	/eliminar_ciudad	10	A	Eliminar                                          
41	solicitud_nuevo	item Nuevo Solicitud	/nueva_solicitud	11	A	Nuevo                                             
42	solicitud_modificar	item Modificar Solicitud	/modificar_solicitud	11	A	Modificar                                         
43	solicitud_cancelar	item Cancelar Solicitud	/cancelar_solicitud	11	A	Cancelar                                          
45	informe_nuevo	item Nuevo Informe	/nuevo_informe	12	A	Nuevo                                             
46	informe_modificar	item Modificar Informe	/modificar_informe	12	A	Modificar                                         
47	informe_cancelar	item Cancelar Informe	/cancelar_informe	12	A	Cancelar                                          
49	informe_seguimiento	item Seguimiento Informe	/seguimiento_informe	12	A	Seguimiento                                       
48	informe_reimprimir	item Reimprimir Informe	/reimprimir_informe	12	A	Buscar y Reimprimir                               
44	solicitud_reimprimir	item Reimprimir Solicitud	/reimprimir_solicitud	11	A	Buscar y Reimprimir                               
50	pasajes_usado	item Usado Pasajes	/pasajes_usados	13	A	Usados                                            
51	pasajes_no_usado	item No Usado Pasajes	/pasajes_no_usados	13	A	No Usados                                         
52	pasajes_reasignados	item Reasignado Pasajes	/pasajes_reasignados	13	A	Reasignados                                       
54	permisos_nuevo	item Nuevo Permisos	/nuevo_permisos	53	A	Nuevo                                             
55	permisos_modificar	item Modificar Permisos	/modificar_permisos	53	A	Modificar                                         
13	menu_pasajes	raiz del Módulo de Pasajes	/pasajes	1	A	Pasajes Aéreos                                    
12	menu_informe	raiz del Módulo de Informe	/informe	1	A	Informe                                           
11	menu_solicitud	raiz del Módulo de Solicitud	/solicitud	1	A	Solicitud                                         
15	usuario_modificar	item Modificar Usuario	/modificar_usuario	2	A	Modificar                                         
14	usuario_nuevo	item Nuevo Usuario	/nuevo_usuario	2	A	Nuevo                                             
10	menu_ciudad	raiz del Módulo del Ciudad	/ciudad	1	A	Ciudad                                            
9	menu_provincia	raiz del Módulo de Provincia	/provincia	1	A	Provincia                                         
8	menu_pais	raiz del Módulo de País	/pais	1	A	País                                              
7	menu_cargo	raiz del Módulo de Cargo	/cargo	1	A	Cargo                                             
6	menu_vehiculo	raiz del Módulo de Vehiculo	/vehiculo	1	A	Vehículo                                          
5	menu_departamento	raiz del Módulo de Departamento	/departamento	1	A	Departamento                                      
4	menu_banco	raiz del Módulo de Banco	/banco	1	A	Banco                                             
3	menu_rol	raiz del Módulo de Rol	/rol	1	A	Rol                                               
2	menu_usuario	raiz del Módulo de Usuario	/usuario	1	A	Usuario                                           
1	Raiz	raiz principal	/	0	A	Sistema Viaticos                                  
56	menu_configuracion	raiz de Módulo de Configuración	/config	1	A	Configuración                                     
53	menu_permisos	raiz del Módulo de Permisos	/permisos	1	A	Permisos                                          
57	solicitud_ver	item Ver Solicitud	/ver_solicitud	11	A	Ver Solicitud                                     
\.


--
-- TOC entry 2658 (class 0 OID 0)
-- Dependencies: 236
-- Name: modulo_mod_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('modulo_mod_id_seq', 6, true);


--
-- TOC entry 2574 (class 0 OID 16577)
-- Dependencies: 203
-- Data for Name: modulo_rol; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY modulo_rol (modrol_id, rol_id, mod_id, modrol_desde, modrol_hasta, modrol_observaciones) FROM stdin;
1	2	11	2016-10-17	\N	\N
2	2	12	2016-10-17	\N	\N
3	2	13	2016-10-17	\N	\N
4	2	41	2016-10-17	\N	\N
5	2	42	\N	\N	\N
6	2	43	\N	\N	\N
7	2	44	\N	\N	\N
8	2	45	\N	\N	\N
9	2	46	\N	\N	\N
10	2	47	\N	\N	\N
11	2	48	\N	\N	\N
12	2	49	\N	\N	\N
13	2	50	\N	\N	\N
14	2	51	\N	\N	\N
15	2	52	\N	\N	\N
16	3	11	\N	\N	\N
17	3	12	\N	\N	\N
18	3	13	\N	\N	\N
19	3	2	\N	\N	\N
20	3	41	\N	\N	\N
21	3	42	\N	\N	\N
22	3	43	\N	\N	\N
23	3	44	\N	\N	\N
24	3	45	\N	\N	\N
25	3	46	\N	\N	\N
26	3	47	\N	\N	\N
27	3	48	\N	\N	\N
28	3	49	\N	\N	\N
29	3	50	\N	\N	\N
30	3	51	\N	\N	\N
31	3	52	\N	\N	\N
32	3	14	\N	\N	\N
33	3	15	\N	\N	\N
34	3	16	\N	\N	\N
35	3	17	\N	\N	\N
36	2	56	\N	\N	\N
37	2	57	\N	\N	\N
38	3	57	\N	\N	\N
39	4	57	\N	\N	\N
40	4	11	\N	\N	\N
41	4	41	\N	\N	\N
\.


--
-- TOC entry 2659 (class 0 OID 0)
-- Dependencies: 237
-- Name: modulo_rol_modrol_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('modulo_rol_modrol_id_seq', 1, false);


--
-- TOC entry 2575 (class 0 OID 16588)
-- Dependencies: 204
-- Data for Name: nousado; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY nousado (nousa_id, trainf_id, nousa_fechajustificativo, nousa_justificativo) FROM stdin;
\.


--
-- TOC entry 2660 (class 0 OID 0)
-- Dependencies: 238
-- Name: nousado_nousa_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('nousado_nousa_id_seq', 1, false);


--
-- TOC entry 2625 (class 0 OID 57419)
-- Dependencies: 254
-- Data for Name: pais; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY pais (pais_id, pais_nombre) FROM stdin;
1	ECUADOR
\.


--
-- TOC entry 2576 (class 0 OID 16598)
-- Dependencies: 205
-- Data for Name: persona; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY persona (per_id, per_nombre, per_apellido, per_identificacion, per_estado, per_correoelectronico, per_iniciales, per_creado, per_nombrecompleto) FROM stdin;
16	Juan Fernando	Arce Elizalde	0913905170   	A	juan.arce@vicepresidencia.gob.ec	JFAE	2016-09-28	Juan Fernando Arce Elizalde
17	Oscar Patricio	Arguello Segovia	1711432763   	A	oscar.arguello@vicepresidencia.gob.ec	OPAS	2016-09-28	Oscar Patricio Arguello Segovia
18	Rómulo Santiago	Armas Real	1803542206   	A	romulo.armas@vicepresidencia.gob.ec	RSAR	2016-09-28	Rómulo Santiago Armas Real
20	Paolo Washington	Artieda Subia	1712926169   	A	paolo.artieda@vicepresidencia.gob.ec	PWAS	2016-09-28	Paolo Washington Artieda Subia
22	Rafael Alfonso	Avilés Silva	0912374410   	A	rafael.aviles@vicepresidencia.gob.ec	RAAS	2016-09-28	Rafael Alfonso Avilés Silva
23	Luis Danilo	Ayo Barros	1712201951   	A	luis.ayo@vicepresidencia.gob.ec	LDAB	2016-09-28	Luis Danilo Ayo Barros
24	Hipólito Felipe	Bajaña Latacumba	1714425657   	A	hipolito.bajana@vicepresidencia.gob.ec	HFBL	2016-09-28	Hipólito Felipe Bajaña Latacumba
25	Mariana de Jesús	Balarezo Núñez	0601255276   	A	mariana.balarezo@vicepresidencia.gob.ec	MdBN	2016-09-28	Mariana de Jesús Balarezo Núñez
27	Marlon Geovanny	Baque Sánchez	1307622942   	A	marlon.baque@vicepresidencia.gob.ec	MGBS	2016-09-28	Marlon Geovanny Baque Sánchez
28	Rómulo David	Bárcenes López	1717989311   	A	romulo.barcenes@vicepresidencia.gob.ec	RDBL	2016-09-28	Rómulo David Bárcenes López
29	Edwin Patricio	Barros Pilaquinga	1715655245   	A	patricio.barros@vicepresidencia.gob.ec	EPBP	2016-09-28	Edwin Patricio Barros Pilaquinga
30	María Inés	Bastidas López	1716753924   	A	maria.bastidas@vicepresidencia.gob.ec	MIBL	2016-09-28	María Inés Bastidas López
32	Byron Santiago	Benítez Echegaray	1002455630   	A	santiago.benitez@vicepresidencia.gob.ec	BSBE	2016-09-28	Byron Santiago Benítez Echegaray
33	Carlos Andrés	Bernal Alvarado	1309446050   	A	carlos.bernal@vicepresidencia.gob.ec	CABA	2016-09-28	Carlos Andrés Bernal Alvarado
34	Sergio Alejandro	Borja Flores	1710734821   	A	alejandro.borja@vicepresidencia.gob.ec	SABF	2016-09-28	Sergio Alejandro Borja Flores
35	Mauricio Andrés	Borja Rosero	1721749602   	A	mauricio.borja@vicepresidencia.gob.ec	MABR	2016-09-28	Mauricio Andrés Borja Rosero
37	Tatiana Valeria	Briones Carrión	0926484353   	A	tatiana.briones@vicepresidencia.gob.ec	TVBC	2016-09-28	Tatiana Valeria Briones Carrión
38	María Augusta de Jesús	Bucheli Oramas	1710237080   	A	maria.bucheli@vicepresidencia.gob.ec	MABO	2016-09-28	María Augusta de Jesús Bucheli Oramas
39	Angélica María	Bustamante Jaramillo	1103177398   	A	angelica.bustamante@vicepresidencia.gob.ec	AMBJ	2016-09-28	Angélica María Bustamante Jaramillo
41	Washington Roberto	Cabezas Pillajo	1708983786   	A	roberto.cabezas@vicepresidencia.gob.ec	WRCP	2016-09-28	Washington Roberto Cabezas Pillajo
42	Belén Alexandra	Cachaguay Loachamin	1713803821   	A	belen.cachaguay@vicepresidencia.gob.ec	BACL	2016-09-28	Belén Alexandra Cachaguay Loachamin
43	Segundo Manuel	Caisaguano Punguil	1704332236   	A	segundo.caisaguano@vicepresidencia.gob.ec	SMCP	2016-09-28	Segundo Manuel Caisaguano Punguil
44	Iveth Alexandra	Caiza Changoluisa	1724476807   	A	iveth.caiza@vicepresidencia.gob.ec	IACC	2016-09-28	Iveth Alexandra Caiza Changoluisa
46	Jimmy Antonio	Cañarte Castillo	1305348342   	A	jimmy.canarte@vicepresidencia.gob.ec	JACC	2016-09-28	Jimmy Antonio Cañarte Castillo
47	Johnnathan Fabricio	Carrillo Carrión	1708549835   	A	johnnathan.carrillo@vicepresidencia.gob.ec	JFCC	2016-09-28	Johnnathan Fabricio Carrillo Carrión
48	María Fernanda	Castañeda Alencastro	1706841424   	A	maria.castaneda@vicepresidencia.gob.ec	MFCA	2016-09-28	María Fernanda Castañeda Alencastro
49	Edwin Bolívar	Castellanos Lucina	1717749236   	A	lucina.castellanos@vicepresidencia.gob.ec	EBCL	2016-09-28	Edwin Bolívar Castellanos Lucina
53	Pablo Geovani	Cepeda Jarrín	1707518260   	A	pablo.cepeda@vicepresidencia.gob.ec	PGCJ	2016-09-28	Pablo Geovani Cepeda Jarrín
54	Luis Alfredo	Cervantes Anangonó	1713264388   	A	luis.cervantes@vicepresidencia.gob.ec	LACA	2016-09-28	Luis Alfredo Cervantes Anangonó
55	Mario Federico	Cervantes Toledo	1708201031   	A	mario.cervantes@vicepresidencia.gob.ec	MFCT	2016-09-28	Mario Federico Cervantes Toledo
56	Juan Eudoro	Cevallos García	1308345048   	A	juan.cevallos@vicepresidencia.gob.ec	JECG	2016-09-28	Juan Eudoro Cevallos García
59	Nathalie	Chauvín Andrade	1709323057   	A	nathalie.chauvin@vicepresidencia.gob.ec	NCA 	2016-09-28	Nathalie Chauvín Andrade
60	Juan Carlos	Chávez Cevallos	1711652402   	A	juan.chaves@vicepresidencia.gob.ec	JCCC	2016-09-28	Juan Carlos Chávez Cevallos
61	Sandra Jannet Victoria	Chávez Meneses	1706531744   	N	sandra.chavez@vicepresidencia.gob.ec	SJCM	2016-09-28	Sandra Jannet Victoria Chávez Meneses
62	Juan Rolando	Chávez Puco	1708463235   	A	juan.puco@vicepresidencia.gob.ec	JRCP	2016-09-28	Chávez Meneses Chávez Puco
63	Luis Hector	Cobo Gómez	1713996096   	A	luis.cobo@vicepresidencia.gob.ec	LHCG	2016-09-28	Luis Hector Cobo Gómez
65	Rosa María	Corregidor Paucar	0201616612   	A	rosa.corregidor@vicepresidencia.gob.ec	RMCP	2016-09-28	Rosa María Corregidor Paucar
66	Sonia Maribel	Cruz Poaquiza	1726202078   	A	sonia.cruz@vicepresidencia.gob.ec	SMCP	2016-09-28	Sonia Maribel Cruz Poaquiza
67	Georgina Jackeline	Cueva Serrano	1704054939   	A	jackeline.cueva@vicepresidencia.gob.ec	GJCS	2016-09-28	Georgina Jackeline Cueva Serrano
90	Joel Fernando	Gallegos Escobar	1715703664   	A	joel.gallegos@vicepresidencia.gob.ec	JFGE	2016-09-28	Joel Fernando Gallegos Escobar
21	Ana Belén	Ávila Pacheco	1721874103   	N	ana.avila@vicepresidencia.gob.ec	ABÁP	2016-09-28	Ana Belén Ávila Pacheco
57	Diego Mauricio	Cevallos Perugachi	1711628428   	N	diego.cevallos@vicepresidencia.gob.ec	DMCP	2016-09-28	Diego Mauricio Cevallos Perugachi
68	Ángela Consuelo	Cusme Bravo	1304399338   	A	angela.cusme@vicepresidencia.gob.ec	ÁCCB	2016-09-28	Ángela Consuelo Cusme Bravo
69	Luis Aníbal	Dalgo Galarza	1705041836   	A	luis.dalgo@vicepresidencia.gob.ec	LADG	2016-09-28	Luis Aníbal Dalgo Galarza
70	Beatriz Eugenia	Dávila Loor	1702741172   	A	eugenia.davila@vicepresidencia.gob.ec	BEDL	2016-09-28	Beatriz Eugenia Dávila Loor
72	María Alexandra	Delgado Simbaña	1718112145   	A	alexandra.delgado@vicepresidencia.gob.ec	MADS	2016-09-28	María Alexandra Delgado Simbaña
73	Rubén Raúl	Díaz Silva	1705905956   	A	ruben.diaz@vicepresidencia.gob.ec	RRDS	2016-09-28	Rubén Raúl Díaz Silva
74	Mickey William	Díaz Uribe	0922218201   	N	mickey.diaz@vicepresidencia.gob.ec	MWDU	2016-09-28	Mickey William Díaz Uribe
75	Marco Vinicio	Duque Hidalgo	1708791866   	A	marco.duque@vicepresidencia.gob.ec	MVDH	2016-09-28	Marco Vinicio Duque Hidalgo
77	Arturo José	Escala Varas	0904861358   	A	arturo.escala@vicepresidencia.gob.ec	AJEV	2016-09-28	Arturo José Escala Varas
79	Eugenia Sofía	Espín Reyes	1203637754   	A	sofia.espin@vicepresidencia.gob.ec	ESER	2016-09-28	Eugenia Sofía Espín Reyes
80	Paola Romina	Espinel Barreno	1721164380   	A	paola.espinel@vicepresidencia.gob.ec	PREB	2016-09-28	Paola Romina Espinel Barreno
81	Rita Soraya	Espinosa Sotomayor	1101832283   	A	rita.espinosa@vicepresidencia.gob.ec	RSES	2016-09-28	Rita Soraya Espinosa Sotomayor
83	Carlos Santiago	Estévez Pérez	1713870846   	A	santiago.estevez@vicepresidencia.gob.es	CSEP	2016-09-28	Carlos Santiago Estévez Pérez
84	Daniela Alexandra	Fierro Núñez	1719593186   	A	daniela.fierro@vicepresidencia.gob.ec	DAFN	2016-09-28	Daniela Alexandra Fierro Núñez
85	María Fernanda	Flores Cedeño	1715369441   	A	maria.flores@vicepresidencia.gob.ec	MFFC	2016-09-28	María Fernanda Flores Cedeño
86	Alexis Oswaldo	Fuentes Morales	1715103675   	A	alexis.fuentes@vicepresidencia.gob.ec	AOFM	2016-09-28	Alexis Oswaldo Fuentes Morales
87	Patricio Daniel	Galárraga Sosa	1713848214   	A	patricio.galarraga@vicepresidencia.gob.ec	PDGS	2016-09-28	Patricio Daniel Galárraga Sosa
89	Diego Ramiro	Gallegos Camacho	1716790991   	A	diego.gallegos@vicepresidencia.gob.ec	DRGC	2016-09-28	Diego Ramiro Gallegos Camacho
91	Katya Paulina	García Cárdenas	1726182130   	A	tania.munoz@vicepresidencia.gob.ec	KPGC	2016-09-28	Katya Paulina García Cárdenas
92	Andrea Verónica	García Paz	1714767959   	A	andrea.garcia@vicepresidencia.gob.ec	AVGP	2016-09-28	Andrea Verónica García Paz
93	Mónica Germania	García Tafur	1711885861   	A	monica.garcia@vicepresidencia.gob.ec	MGGT	2016-09-28	Mónica Germania García Tafur
94	Rosana Irene	Giler Moreira	1304592965   	A	rosana.giler@vicepresidencia.gob.ec	RIGM	2016-09-28	Rosana Irene Giler Moreira
97	Denisse Andrea	González Palau	0915718670   	A	denisse.gonzalez@vicepresidencia.gob.ec	DAGP	2016-09-28	Denisse Andrea González Palau
99	Sandra	Grimaldi Casadei	0911429561   	A	sandra.grimaldi@vicepresidencia.gob.ec	SGC 	2016-09-28	Sandra Grimaldi Casadei
98	Diana Carolina	González Vásquez	1720214681   	N	diana.gonzalez@vicepresidencia.gob.ec	DCGV	2016-09-28	Diana Carolina González Vásquez
101	Darwin Wilfrido	Guijarro Brito	0916209356   	A	darwin.guijarro@vicepresidencia.gob.ec	DWGB	2016-09-28	Darwin Wilfrido Guijarro Brito
102	Juan Carlos	Guisamano Lasso	1711310209   	A	juan.guisamano@vicepresidencia.gob.ec	JCGL	2016-09-28	Juan Carlos Guisamano Lasso
103	Andrea Sofía	Gutiérrez Proaño	1724521958   	A	eduardo.mendoza@vicepresidencia.gob.ec	ASGP	2016-09-28	Andrea Sofía Gutiérrez Proaño
104	Jorge Alejandro	Guzmán Soria	1721338398   	A	jorge.guzman@vicepresidencia.gob.ec	JAGS	2016-09-28	Jorge Alejandro Guzmán Soria
105	Sharon Elena	Hanze Rodríguez	0801967951   	A	sharon.hanze@vicepresicencia.gob.ec	SEHR	2016-09-28	Sharon Elena Hanze Rodríguez
107	Aidé Karina	Herrera Díaz	0705177566   	A	aide.herrera@vicepresidencia.gob.ec	AKHD	2016-09-28	Aidé Karina Herrera Díaz
108	Carlos Wladimir	Játiva Atti	1712739695   	A	wladimir.jativa@vicepresidencia.gob.ec	CWJA	2016-09-28	Carlos Wladimir Játiva Atti
109	Juan Andrés	Játiva Flores	1719219568   	A	juan.jativa@vicepresidencia.gob.ec	JAJF	2016-09-28	Juan Andrés Játiva Flores
110	Leonardo Wilington	Jiménez Jiménez	0913524484   	A	leonardo.jimenez@vicepresidencia.gob.ec	LWJJ	2016-09-28	Leonardo Wilington Jiménez Jiménez
112	Diego Fernando	Lara Borja	1713093688   	N	diego.lara@vicepresidencia.gob.ec	DFLB	2016-09-28	Diego Fernando Lara Borja
113	Guillermo Marcelo	Lascano López	1709077679   	A	guillermo.lascano@vicepresidencia.gob.ec	GMLL	2016-09-28	Guillermo Marcelo Lascano López
114	Lexi Liduvina	Loor Alcívar	1306246909   	A	lexi.loor@vicepresidencia.gob.ec	LLLA	2016-09-28	Lexi Liduvina Loor Alcívar
115	Giovanni Alexander	López Grijalva	1751028695   	A	giovanni.lopez@vicepresidencia.gob.ec	GALG	2016-09-28	Giovanni Alexander López Grijalva
117	Ángela Rosa	Lucio Alarcón	1716318561   	A	angela.lucio@vicepresidencia.gob.ec	ÁRLA	2016-09-28	Ángela Rosa Lucio Alarcón
118	Adolfo Gustavo	Mariscal Leal	0908859168   	A	adolfo.mariscal@vicepresidencia.gob.ec	AGML	2016-09-28	Adolfo Gustavo Mariscal Leal
119	Marco Antonio	Martínez Basantez	1710444116   	A	marco.martinez@vicepresidencia.gob.ec	MAMB	2016-09-28	Marco Antonio Martínez Basantez
120	Luis Aníbal	Martínez Rodríguez	1708026511   	A	luis.martinez@vicepresidencia.gob.ec	LAMR	2016-09-28	Luis Aníbal Martínez Rodríguez
122	Eduardo Xavier	Mendoza Almeida	1711713014   	A	eduardo.mendoza@vicepresidencia.gob.ec	EXMA	2016-09-28	Eduardo Xavier Mendoza Almeida
123	Galo Patricio	Mendoza Narváez	1708695323   	A	galo.mendoza@vicepresidencia.gob.ec	GPMN	2016-09-28	Galo Patricio Mendoza Narváez
124	Raquel Noemí	Merino Millingalle	1715705842   	A	raquel.merino@vicepresidencia.gob.ec	RNMM	2016-09-28	Raquel Noemí Merino Millingalle
125	Verónica Elizabeth	Merino Sánchez	1710336403   	A	veronica.sanchez@vicepresidencia.gob.ec	VEMS	2016-09-28	Verónica Elizabeth Merino Sánchez
127	José Rodolfo	Mite Cáceres	0916673700   	A	jose.mite@vicepresidencia.gob.ec	JRMC	2016-09-28	José Rodolfo Mite Cáceres
128	Wilson Oswaldo	Mites Cadena	0400614673   	A	wilson.mites@vicepresidencia.gob.ec	WOMC	2016-09-28	Wilson Oswaldo Mites Cadena
129	Mélida Yolanda	Molina Álvarez	0501240113   	A	melida.molina@vicepresidencia.gob.ec	MYMÁ	2016-09-28	Mélida Yolanda Molina Álvarez
130	Vicente Rodrigo	Molineros Yánez	1707210108   	A	rodrigo.molineros@vicepresidencia.gob.ec	VRMY	2016-09-28	Vicente Rodrigo Molineros Yánez
131	José Ramiro	Monteros Pinto	1708452964   	A	ramiro.monteros@vicepresidencia.gob.ec	JRMP	2016-09-28	José Ramiro Monteros Pinto
133	Evelyn Geomary	Mora Herrera	1719055756   	A	evelyn.mora@vicepresidencia.gob.ec	EGMH	2016-09-28	Evelyn Geomary Mora Herrera
134	Iván Yovany	Morales Reinoso	1710853894   	A	ivan.morales@vicepresidencia.gob.ec	IYMR	2016-09-28	Iván Yovany Morales Reinoso
135	Norman Christian	Morales Santander	1710305507   	A	norman.morales@vicepresidencia.gob.ec	NCMS	2016-09-28	Norman Christian Morales Santander
136	Paul Aurelio	Mosquera Arcos	0916840358   	A	paul.mosquera@vicepresidencia.gob.ec	PAMA	2016-09-28	Paul Aurelio Mosquera Arcos
138	Olga Cristina	Muentes Vélez	0910788041   	A	olga.muentes@vicepresidencia.gob.ec	OCMV	2016-09-28	Olga Cristina Muentes Vélez
139	Tania del Rocío	Muñoz Vicuña	0103217691   	A	tania.munoz@vicepresidencia.gob.ec	TdMV	2016-09-28	Tania del Rocío Muñoz Vicuña
140	María Gabriela	Murillo Bucheli	1709159246   	A	gabriela.murillo@vicepresidencia.gob.ec	MGMB	2016-09-28	María Gabriela Murillo Bucheli
141	Christian Geovanny	Novoa Oquendo	1714330303   	A	christian.novoa@vicepresidencia.gob.ec	CGNO	2016-09-28	Christian Geovanny Novoa Oquendo
143	Fabián Ramiro	Olivo Palma	0503076143   	A	fabian.olivo@vicepresidencia.gob.ec	FROP	2016-09-28	Fabián Ramiro Olivo Palma
144	Mayra Cristina	Ormaza Macías	1717622995   	A	mayra.ormaza@vicepresidencia.gob.ec	MCOM	2016-09-28	Mayra Cristina Ormaza Macías
145	Jorge Alberto	Ortega Benavides	1707592307   	A	jorge.ortega@vicepresidencia.gob.ec	JAOB	2016-09-28	Jorge Alberto Ortega Benavides
146	Christian Leonardo	Ortega Rodríguez	1716792583   	A	christian.ortega@vicepresdiencia.gob.ec	CLOR	2016-09-28	Christian Leonardo Ortega Rodríguez
148	Agustín Andrés	Ortiz Costa	0913435970   	A	agustin.ortiz@vicepresidencia.gob.ec	AAOC	2016-09-28	Agustín Andrés Ortiz Costa
149	Daniel Eduardo	Ortiz Simbaña	1716941271   	A	daniel.ortiz@vicepresidencia.gob.ec	DEOS	2016-09-28	Daniel Eduardo Ortiz Simbaña
151	Soledad Beatriz	Padilla Morán	0921938064   	A	soledad.padilla@vicepresidencia.gob.ec	SBPM	2016-09-28	Soledad Beatriz Padilla Morán
152	Milton Germán	Paredes Caicedo	1713489191   	A	milton.paredes@vicepresidencia.gob.ec	MGPC	2016-09-28	Milton Germán Paredes Caicedo
154	Rodrigo Iván	Paredes Pérez	1704441409   	A	ivan.paredes@vicepresidencia.gob.ec	RIPP	2016-09-28	Rodrigo Iván Paredes Pérez
155	Cristian Guillermo	Paredes Vázcones	1712861556   	A	cristian.paredes@vicepresidencia.gob.ec	CGPV	2016-09-28	Cristian Guillermo Paredes Vázcones
156	Ángel Martin	Parión Farinango	1500705734   	A	angel.parion@vicepresidencia.gob.ec	ÁMPF	2016-09-28	Ángel Martin Parión Farinango
157	Grace Alexandra	Parra Morales	1720061777   	A	grace.parra@vicepresidencia.gob.ec	GAPM	2016-09-28	Grace Alexandra Parra Morales
158	Luis Alfonso	Pastrano Quintana	1709835183   	A	luis.pastrano@vicepresidencia.gob.ec	LAPQ	2016-09-28	Luis Alfonso Pastrano Quintana
160	Stefanía Carolina	Peredo Mojarrango	0924191257   	A	stefania.peredo@vicepresidencia.gob.ec	SCPM	2016-09-28	Stefanía Carolina Peredo Mojarrango
161	José Luis	Pérez Valverde	0926646381   	A	jose.perez@vicepresidencia.gob.ec	JLPV	2016-09-28	José Luis Pérez Valverde
162	María Cristina	Plaza Flores	1706317748   	A	maria.plaza@vicepresidencia.gob.ec	MCPF	2016-09-28	María Cristina Plaza Flores
163	Bety Solanda	Ponce Sánchez	0801683392   	A	bety.ponce@vicepresidencia.gob.ec	BSPS	2016-09-28	Bety Solanda Ponce Sánchez
165	Hernán Ezequiel	Potosí Morales	0401096425   	A	hernan.potosi@vicepresidencia.gob.ec	HEPM	2016-09-28	Hernán Ezequiel Potosí Morales
2	Aurelio Alejandro	Aguirre Alulema	1717642944   	A	alejandro.aguirre@vicepresidencia.gob.ec	AAAA	2016-09-28	Aurelio Alejandro Aguirre Alulema
4	Maria Fernanda	Alban Moreira	1714949375   	A	fernanda.alban@vicepresidencia.gob.ec	MFAM	2016-09-28	Maria Fernanda Alban Moreira
6	Fernando Lorenzo	Aldás Mayorga	0401346622   	A	fernando.aldas@vicepresidencia.gob.ec	FLAM	2016-09-28	Fernando Lorenzo Aldás Mayorga
5	Sara Tatiana	Alcocer Calderón	1720905288   	N	sara.alcocer@vicepresidencia.gob.ec	STAC	2016-09-28	Sara Tatiana Alcocer Calderón
7	Cesar Eduardo	Almeida Cuzco	1703414985   	A	cesar.almeida@vicepresidencia.gob.ec	CEAC	2016-09-28	Cesar Eduardo Almeida Cuzco
9	Carlos Alfredo	Alvear Guzmán	1702695717   	A	carlos.alvearg@vicepresidencia.gob.ec	CAAG	2016-09-28	Carlos Alfredo Alvear Guzmán
11	Geovanny Iván	Ambuludi Gualán	2100035373   	A	geovanny.ambuludi@vicepresidencia.gob.ec	GIAG	2016-09-28	Geovanny Iván Ambuludi Gualán
10	Johana Gabriela	Alvear López	1714636345   	A	johana.alvear@vicepresidencia.gob.ec	JGAL	2016-09-28	Johana Gabriela Alvear López
12	Sara del Rocío	Andrade Lema	1708784499   	A	sara.andrade@vicepresidencia.gob.ec	SdAL	2016-09-28	Sara del Rocío Andrade Lema
14	Luis Fernando	Anrango Ramos	1713991600   	A	luis.anrango@vicepresidencia.gob.ec	LFAR	2016-09-28	Luis Fernando Anrango Ramos
15	Jorge Ricardo	Arboleda Palma	1712209806   	A	jorge.arboleda@vicepresidencia.gob.ec	JRAP	2016-09-28	Jorge Ricardo Arboleda Palma
150	Andrea Carolina	Pabón Quito	1003281514   	N	andrea.pabon@vicepresidencia.gob.ec	ACPQ	2016-09-28	Andrea Carolina Pabón Quito
166	María Fernanda	Poveda Bonilla	0201338159   	A	maria.poveda@vicepresidencia.gob.ec	MFPB	2016-09-28	María Fernanda Poveda Bonilla
167	Diego Mario	Prado Bravo	0400946976   	A	diego.prado@vicepresidencia.gob.ec	DMPB	2016-09-28	Diego Mario Prado Bravo
169	Luis Edwin	Quimis Arteaga	1716986441   	A	luis.quimis@vicepresidencia.gob.ec	LEQA	2016-09-28	Luis Edwin Quimis Arteaga
170	Mario Andrés	Ramón Bustamante	1718102641   	A	mario.ramon@vicepresidencia.gob.ec	MARB	2016-09-28	Mario Andrés Ramón Bustamante
171	Bélgica Victoria	Ramos Sarmiento	1706982657   	A	belgica.ramos@vicepresidencia.gob.ec	BVRS	2016-09-28	Bélgica Victoria Ramos Sarmiento
172	Ximena Soledad	Ramos Viteri	0502782527   	A	ximena.ramos@vicepresidencia.gob.ec	XSRV	2016-09-28	Ximena Soledad Ramos Viteri
174	Homero Clemente	Rendón Balladares	0909388381   	A	homero.rendon@vicepresidencia.gob.ec	HCRB	2016-09-28	Homero Clemente Rendón Balladares
175	Mónica Elizabeth	Reyes Cruz	1709417420   	A	monica.reyes@vicepresidencia.gob.ec	MERC	2016-09-28	Mónica Elizabeth Reyes Cruz
176	Patricia Monserrate	Rodríguez Araujo	1203598352   	A	patricia.rodriguez@vicepresidencia.gob.ec	PMRA	2016-09-28	Patricia Monserrate Rodríguez Araujo
177	Santiago Francisco	Ron Villacrés	1710585223   	A	santiago.ron@vicepresidencia.gob.ec	SFRV	2016-09-28	Santiago Francisco Ron Villacrés
179	Enma de Lourdes	Ruiz Flores	1000853497   	A	enma.ruiz@vicepresidencia.gob.ec	EdRF	2016-09-28	Enma de Lourdes Ruiz Flores
180	Sergio Adrián	Ruiz Giraldo	1710425040   	A	sergio.ruiz@vicepresidencia.gob.ec	SARG	2016-09-28	Sergio Adrián Ruiz Giraldo
181	Iván Patricio	Ruiz	1704676038   	A	patricio.ruiz@vicepresidencia.gob.ec	IPR 	2016-09-28	Iván Patricio Ruiz
182	Evelyn Daniela	Salazar Zabala	1720270832   	A	evelyn.salazar@vicepresidencia.gob.ec	EDSZ	2016-09-28	Evelyn Daniela Salazar Zabala
183	Christian Fabián	Salinas Idrovo	0915278147   	A	christian.salinas@vicepresidencia.gob.ec	CFSI	2016-09-28	Christian Fabián Salinas Idrovo
185	Lourdes Jeannette	Sánchez Zurita	1801516202   	A	jeannette.sanchez@vicepresidencia.gob.ec	LJSZ	2016-09-28	Lourdes Jeannette Sánchez Zurita
186	William Eduardo	Sango Erazo	1718753559   	A	william.sango@vicepresidencia.gob.ec	WESE	2016-09-28	William Eduardo Sango Erazo
187	Ruth Nataly	Sarango Luzón	1718403379   	A	ruth.sarango@vicepresidencia.gob.ec	RNSL	2016-09-28	Ruth Nataly Sarango Luzón
188	Wilson Iván	Segovia Herrera	1707094528   	A	wilson.segovia@vicepresidencia.gob.ec	WISH	2016-09-28	Wilson Iván Segovia Herrera
190	Marco Vinicio	Simbaña Correa	1707020614   	A	marco.simbana@vicepresidencia.gob.ec	MVSC	2016-09-28	Marco Vinicio Simbaña Correa
191	Tamara Victoria	Sotomayor Murillo	0912764925   	A	tamara.sotomayo@vicepresidencia.gob.ec	TVSM	2016-09-28	Tamara Victoria Sotomayor Murillo
203	Juan Carlos	Villacís Quiñonez	0803261858   	A	juan.villacis@vicepresidencia.gob.ec	JCVQ	2016-09-28	Juan Carlos Villacís Quiñonez
204	Luz Patricia	Vinueza Aguirre	0401367586   	A	patricia.vinueza@vicepresidencia.gob.ec	LPVA	2016-09-28	Luz Patricia Vinueza Aguirre
206	Byron Alfredo	Wilchez Ramón	1717992968   	A	byron.wilchez@vicepresidencia.gob.ec	BAWR	2016-09-28	Byron Alfredo Wilchez Ramón
207	Milton Oswaldo	Yánez Fierro	0200940997   	A	milton.yanez@vicepresidencia.gob.ec	MOYF	2016-09-28	Milton Oswaldo Yánez Fierro
208	Shuirp Marisol	Yankur Pujupat	1400592810   	A	marisol.yankur@vicepresidencia.gob.ec	SMYP	2016-09-28	Shuirp Marisol Yankur Pujupat
209	Víctor Gabriel	Zapata Varela	1705990438   	A	victor.zapata@vicepresidencia.gob.ec	VGZV	2016-09-28	Víctor Gabriel Zapata Varela
210	Juan Francisco	Zurita Aldáz	1714134838   	A	juan.zurita@vicepresidencia.gob.ec	JFZA	2016-09-28	Juan Francisco Zurita Aldáz
96	Danny Alexander	Gómez Suasnavas	1710718477   	A	danny.gomez@vicepresidencia.gob.ec	DAGS	2016-09-28	Danny Alexander Gómez Suasnavas
1	Mónica Geoconda	Aguas Paredes	1718498759   	A	geoconda.aguas@vicepresidencia.gob.ec	MGAP	2016-09-28	Mónica Geoconda Aguas Paredes
3	Doris Margarita	Aguirre Bustamante	1100634516   	A	doris.aguirre@vicepresidencia.gob.ec	DMAB	2016-09-28	Doris Margarita Aguirre Bustamante
8	Andrés Vinicio	Álvarez Romero	1723680664   	A	andres.alvarez@vicepresidencia.gob.ec	AVÁR	2016-09-28	Andrés Vinicio Álvarez Romero
13	Verónica Cecilia	Angulo Calvache	1718940719   	A	veronica.angulo@vicepresidencia.gob.ec	VCAC	2016-09-28	Verónica Cecilia Angulo Calvache
19	Richarth Rolando	Armijos Paño	1720830536   	A	richarth.armijos@vicepresidencia.gob.ec	RRAP	2016-09-28	Richarth Rolando Armijos Paño
26	Gina Elizabeth	Balladares Rubio	0502394059   	A	gina.balladares@vicepresidencia.gob.ec	GEBR	2016-09-28	Gina Elizabeth Balladares Rubio
31	Washington Javier	Benítez Bucheli	0401095054   	A	washington.benitez@vicepresidencia.gob.ec	WJBB	2016-09-28	Washington Javier Benítez Bucheli
36	Luis Reemberto	Bosmediano Hinojosa	1706364484   	A	luis.bosmediano@vicepresidencia.gob.ec	LRBH	2016-09-28	Luis Reemberto Bosmediano Hinojosa
40	Elizabeth Enriqueta	Cabezas Guerrero	1706641089   	A	elizabeth.cabezas@vicepresidencia.gob.ec	EECG	2016-09-28	Elizabeth Enriqueta Cabezas Guerrero
45	Santiago Patricio	Calderón Salas	1706728290   	A	santiago.calderon@vicepresidencia.gob.ec	SPCS	2016-09-28	Santiago Patricio Calderón Salas
50	Diego Alcívar	Castillo Sarango	1104464365   	N	diego.castillo@vicepresidencia.gob.ec	DACS	2016-09-28	Diego Alcívar Castillo Sarango
51	Rosa Mélida	Castro Romero	1710682475   	A	melida.castro@vicepresidencia.gob.ec	RMCR	2016-09-28	Castillo Sarango Castro Romero
52	Maira Viviana	Cedeño Castro	0912970753   	A	maria.cedeño@vicepresidencia.gob.ec	MVCC	2016-09-28	Maira Viviana Cedeño Castro
58	Diana Rocío	Changoluisa Caizaguano	1723200851   	A	diana.changoluisa@vicepresidencia.gob.ec	DRCC	2016-09-28	Diana Rocío Changoluisa Caizaguano
64	Carlos Paúl	Correa Torres	1716548597   	A	carlos.correa@vicepresidencia.gob.ec	CPCT	2016-09-28	Carlos Paúl Correa Torres
71	Karina Noemí	De La Cruz Paredes	1715481477   	A	karina.delacruz@vicepresidencia.gob.ec	KNDL	2016-09-28	Karina Noemí De La Cruz Paredes
76	Omar Alberto	Erreis Peñarreta	1719760538   	N	omar.erreis@vicepresidencia.gob.ec	OAEP	2016-09-28	Omar Alberto Erreis Peñarreta
78	Juan José	Espín Díaz	1720205978   	N	juan.espin@vicepresidencia.gob.ec	JJED	2016-09-28	Juan José Espín Díaz
82	Luis Iván	Estacio Primintela	0400992434   	A	luis.estacio@vicepresidencia.gob.ec	LIEP	2016-09-28	Luis Iván Estacio Primintela
88	Elizabeth del Rocío	Galarza Pesantes	1710649193   	A	elizabeth.galarza@vicepresidencia.gob.ec	EdGP	2016-09-28	Elizabeth del Rocío Galarza Pesantes
95	Jorge David	Glas Espinel	0910521939   	A	jorge.glas@vicepresidencia.gob.ec	JDGE	2016-09-28	Jorge David Glas Espinel
100	Andrea Paulina	Guerrero González	0201988409   	A	andrea.guerrero@vicepresidencia.gob.ec	APGG	2016-09-28	Andrea Paulina Guerrero González
106	María Isabel	Hernández Suarez	0920079746   	A	isabel.hernandez@vicepresidencia.gob.ec	MIHS	2016-09-28	María Isabel Hernández Suarez
111	Lorena Fernanda	Lara Andrade	1717706111   	A	lorena.lara@vicepresidencia.gob.ec	LFLA	2016-09-28	Lorena Fernanda Lara Andrade
116	Santiago Alexander	López Veintimilla	1002345955   	A	santiago.lopez@vicepresidencia.gob.ec	SALV	2016-09-28	Santiago Alexander López Veintimilla
121	Francisco Xavier	Mena Molina	1709431801   	A	francisco.mena@vicepresidencia.gob.ec	FXMM	2016-09-28	Francisco Xavier Mena Molina
126	Jonathan Paul	Miranda Flores	1719606764   	A	jonathan.miranda@vicepresidencia.gob.ec	JPMF	2016-09-28	Jonathan Paul Miranda Flores
132	Carolina Alejandra	Montoya Viteri	1717485898   	A	carolina.montoya@vicepresidencia.gob.ec	CAMV	2016-09-28	Monteros Pinto Montoya Viteri
137	Irma Elizabeth	Mosquera Rosero	1707118202   	A	irma.mosquera@vicepresidencia.gob.ec	IEMR	2016-09-28	Irma Elizabeth Mosquera Rosero
142	Cecilia Doralisa	Ocampo Andrade	1710026053   	A	cecilia.ocampo@vicepresidencia.gob.ec	CDOA	2016-09-28	Cecilia Doralisa Ocampo Andrade
147	Cristina Cecibel	Ortiz Cepeda	1718517301   	A	cristina.ortiz@vicepresidencia.gob.ec	CCOC	2016-09-28	Cristina Cecibel Ortiz Cepeda
193	Juan Carlos	Tixi Morocho	1721138046   	A	juan.tixi@vicepresidencia.gob.ec	JCTM	2016-09-28	Juan Carlos Tixi Morocho
195	Patricio Fernando	Torres	1706266739   	A	patricio.torres @vicepresidencia.gob.ec	PFT 	2016-09-28	Patricio Fernando Torres
196	Andrea Francisca	Utreras Pazmiño	1714860523   	A	andrea.utreras@vicepresidencia.gob.ec	AFUP	2016-09-28	Andrea Francisca Utreras Pazmiño
197	Sandra Paulina	Vallejo Abril	1103437818   	A	paulina.vallejo@vicepresidencia.gob.ec	SPVA	2016-09-28	Sandra Paulina Vallejo Abril
199	Carlos Danilo	Vallejo López	1701650234   	A	carlos.vallejo@vicepresidencia.gob.ec	CDVL	2016-09-28	Carlos Danilo Vallejo López
200	Roger Andrés	Vallejo Pérez	1724444482   	A	roger.callejo@vicepresidencia.gob.ec	RAVP	2016-09-28	Roger Andrés Vallejo Pérez
201	Dayse Karina	Vásconez Alomoto	1714455928   	A	dayse.vasconez@vicepresidencia.gob.ec	DKVA	2016-09-28	Dayse Karina Vásconez Alomoto
202	María Cristina	Vera Yánez	1713859542   	A	maria.vera@vicepresidencia.gob.ec	MCVY	2016-09-28	María Cristina Vera Yánez
153	Hidalgo Solin	Paredes Chavarría	1713343315   	A	solin.paredes@vicepresidencia.gob.ec	HSPC	2016-09-28	Hidalgo Solin Paredes Chavarría
159	Luis Iván	Paz Cadena	0400609707   	A	ivan.paz@vicepresidencia.gob.ec	LIPC	2016-09-28	Luis Iván Paz Cadena
164	José Gabriel	Portilla Amador	1201364732   	A	jose.portilla@vicepresidencia.gob.ec	JGPA	2016-09-28	José Gabriel Portilla Amador
168	Vilka Katalina	Proaño López	1203064009   	A	catalina.proano@vicepresidencia.gob.ec	VKPL	2016-09-28	Vilka Katalina Proaño López
173	Juan Carlos de Jesús	Real Navas	1704430907   	A	juan.real@vicepresidencia.gob.ec	JCRN	2016-09-28	Juan Carlos de Jesús Real Navas
178	Fausto Mauricio	Rosero Guachamín	1716107964   	A	fausto.rosero@vicepresidencia.gob.ec	FMRG	2016-09-28	Fausto Mauricio Rosero Guachamín
184	Carla Eliana	Sánchez Correa	0704479872   	N	carla.sanchez@vicepresidencia.gob.ec	CESC	2016-09-28	Carla Eliana Sánchez Correa
189	Cesar Homero	Silva Vásconez	0201751005   	A	cesar.silva@vicepresidencia.gob.ec	CHSV	2016-09-28	Cesar Homero Silva Vásconez
192	Erica Vanesa	Tejada Chávez	1716752132   	A	erica.tejada@vicepresidencia.gob.ec	EVTC	2016-09-28	Erica Vanesa Tejada Chávez
194	Bryan Andrés	Torres Lara	1723450365   	A	pasante.tecnologia@vicepresidencia.gob.ec	BATL	2016-09-28	Bryan Andrés Torres Lara
198	Jeakeline Soledad	Vallejo Bedoya	1711913283   	A	jeakeline.vallejo@vicepresidencia.gob.ec	JSVB	2016-09-28	Jeakeline Soledad Vallejo Bedoya
205	Luis Fernando	Viteri Corrales	1721346342   	A	fernando.viteri@vicepresidencia.gob.ec	LFVC	2016-09-28	Luis Fernando Viteri Corrales
\.


--
-- TOC entry 2577 (class 0 OID 16604)
-- Dependencies: 206
-- Data for Name: persona_comision; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY persona_comision (percom_id, sol_id, com_id, per_id) FROM stdin;
1	28	\N	96
2	36	\N	96
3	37	\N	96
4	38	\N	96
5	39	\N	96
6	40	\N	96
7	41	\N	96
8	42	\N	96
9	47	\N	90
10	47	\N	96
11	48	\N	90
12	48	\N	96
13	49	\N	90
14	49	\N	96
15	50	\N	90
16	50	\N	96
17	51	\N	90
18	51	\N	96
19	52	\N	90
20	52	\N	96
21	53	\N	90
22	53	\N	96
23	54	\N	90
24	54	\N	96
25	87	\N	90
26	87	\N	96
27	88	\N	90
28	88	\N	96
29	92	\N	90
30	92	\N	96
31	93	\N	17
32	93	\N	20
33	94	\N	48
34	94	\N	47
35	97	\N	90
36	97	\N	96
37	100	\N	90
38	100	\N	96
39	102	\N	54
40	102	\N	55
41	104	\N	90
42	104	\N	96
43	105	\N	90
44	106	\N	90
45	107	\N	90
46	108	\N	90
47	109	\N	90
48	110	\N	90
49	111	\N	90
50	112	\N	54
51	113	\N	90
52	114	\N	90
53	115	\N	90
54	116	\N	90
55	117	\N	90
56	118	\N	90
57	119	\N	90
58	120	\N	90
59	121	\N	90
60	122	\N	90
61	123	\N	90
62	124	\N	90
63	125	\N	90
64	127	\N	90
65	128	\N	90
66	131	\N	90
67	132	\N	90
68	133	\N	90
69	134	\N	90
70	135	\N	90
71	136	\N	90
72	137	\N	90
73	138	\N	90
74	139	\N	90
75	140	\N	90
76	141	\N	90
77	142	\N	90
78	143	\N	90
79	144	\N	90
80	145	\N	90
81	146	\N	90
82	147	\N	90
83	148	\N	90
84	149	\N	90
85	150	\N	90
86	151	\N	90
87	152	\N	90
88	153	\N	90
89	154	\N	90
90	156	\N	90
91	157	\N	90
92	158	\N	90
93	159	\N	90
94	160	\N	90
95	161	\N	90
96	162	\N	90
97	163	\N	90
98	164	\N	90
99	165	\N	90
100	166	\N	90
101	167	\N	90
102	167	\N	96
103	168	\N	90
104	169	\N	90
105	169	\N	96
106	170	\N	90
107	170	\N	96
108	171	\N	90
109	171	\N	96
110	172	\N	90
111	173	\N	90
112	174	\N	90
113	175	\N	90
114	175	\N	96
115	183	\N	80
116	183	\N	81
117	184	\N	80
118	184	\N	81
119	185	\N	80
120	185	\N	81
121	186	\N	80
122	186	\N	81
123	187	\N	48
124	188	\N	80
125	189	\N	80
126	190	\N	80
127	191	\N	80
128	192	\N	80
129	193	\N	80
130	194	\N	80
131	194	\N	81
132	195	\N	46
133	196	\N	80
134	197	\N	80
135	197	\N	81
136	198	\N	72
137	198	\N	73
138	199	\N	72
139	199	\N	73
140	200	\N	25
141	201	\N	80
142	201	\N	81
143	203	\N	18
144	203	\N	17
145	204	\N	34
146	204	\N	35
147	205	\N	17
148	205	\N	16
149	206	\N	17
150	206	\N	16
151	208	\N	20
152	209	\N	20
153	213	\N	20
154	216	\N	18
155	279	\N	18
\.


--
-- TOC entry 2661 (class 0 OID 0)
-- Dependencies: 240
-- Name: persona_comision_percom_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('persona_comision_percom_id_seq', 155, true);


--
-- TOC entry 2662 (class 0 OID 0)
-- Dependencies: 239
-- Name: persona_per_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('persona_per_id_seq', 1, false);


--
-- TOC entry 2578 (class 0 OID 16613)
-- Dependencies: 207
-- Data for Name: provincia; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY provincia (prov_id, prov_nombre, prov_region, pais_id) FROM stdin;
1	El Oro	Costa	1
2	Esmeraldas	Costa	1
3	Guayas	Costa	1
4	Los Ríos	Costa	1
5	Manabí	Costa	1
6	Santa Elena	Costa	1
7	Azuay	Sierra	1
8	Bolívar	Sierra	1
9	Cañar	Sierra	1
10	Carchi	Sierra	1
11	Chimborazo	Sierra	1
12	Cotopaxi	Sierra	1
13	Imbabura	Sierra	1
14	Loja	Sierra	1
15	Pichincha	Sierra	1
16	Santo Domingo de los Tsáchilas	Sierra	1
17	Tungurahua	Sierra	1
18	Morona Santiago	Oriente	1
19	Napo	Oriente	1
20	Orellana	Oriente	1
21	Pastaza	Oriente	1
22	Sucumbios	Oriente	1
23	Zamora Chinchipe	Oriente	1
24	Galápagos	Insular	1
\.


--
-- TOC entry 2663 (class 0 OID 0)
-- Dependencies: 241
-- Name: provincia_prov_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('provincia_prov_id_seq', 1, false);


--
-- TOC entry 2579 (class 0 OID 16619)
-- Dependencies: 208
-- Data for Name: rol; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY rol (rol_id, rol_nombre, rol_estado) FROM stdin;
1	SuperAdministrador	A
2	Solicitante	A
3	JefeInmediato	A
4	JefeCoordinacion	A
5	ApruebaGasto	A
6	Pasajes	A
7	JefeTransporte	A
8	Viaticos	A
9	Financiero	A
\.


--
-- TOC entry 2664 (class 0 OID 0)
-- Dependencies: 242
-- Name: rol_rol_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('rol_rol_id_seq', 1, false);


--
-- TOC entry 2580 (class 0 OID 16625)
-- Dependencies: 209
-- Data for Name: solicitud; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY solicitud (sol_id, per_id, sol_secuencial, sol_idsolicitud, sol_numeroactualizacion, sol_estado, sol_anio, sol_fecharealizacion) FROM stdin;
221	87	5	DTIC-2017-SAPCSI-PDGS-5	0	P	2017	2017-02-11
222	87	6	DTIC-2017-SAPCSI-PDGS-6	0	P	2017	2017-02-12
224	87	8	DTIC-2017-SAPCSI-PDGS-8	0	P	2017	2017-02-15
226	87	10	DTIC-2017-SAPCSI-PDGS-10	0	P	2017	2017-02-17
228	87	12	DTIC-2017-SAPCSI-PDGS-12	0	A	2017	2017-02-24
217	32	153	DTIC-2017-SAPCSI-BSBE-153	0	P	2017	2017-02-14
230	87	14	DTIC-2017-SAPCSI-PDGS-14	0	A	2017	2017-02-24
36	32	23	DTIC-2016-SAPCSI-BSBE-23	0	A	2016	2017-02-14
37	32	24	DTIC-2016-SAPCSI-BSBE-24	0	A	2016	2017-02-14
38	32	25	DTIC-2016-SAPCSI-BSBE-25	0	A	2016	2017-02-14
39	32	26	DTIC-2016-SAPCSI-BSBE-26	0	A	2016	2017-02-14
189	32	130	DTIC-2017-SAPCSI-BSBE-130	0	P	2017	2017-02-14
190	32	131	DTIC-2017-SAPCSI-BSBE-131	0	P	2017	2017-02-14
191	32	132	DTIC-2017-SAPCSI-BSBE-132	0	P	2017	2017-02-14
192	32	133	DTIC-2017-SAPCSI-BSBE-133	0	P	2017	2017-02-14
193	32	134	DTIC-2017-SAPCSI-BSBE-134	0	P	2017	2017-02-14
194	32	135	DTIC-2017-SAPCSI-BSBE-135	0	P	2017	2017-02-14
195	32	136	DTIC-2017-SAPCSI-BSBE-136	0	P	2017	2017-02-14
196	87	1	DTIC-2017-SAPCSI-PDGS-1	0	P	2017	2017-02-14
197	87	2	DTIC-2017-SAPCSI-PDGS-2	0	P	2017	2017-02-14
199	32	138	DTIC-2017-SAPCSI-BSBE-138	0	P	2017	2017-02-14
200	197	1	DSPC-2017-SAPCSI-SPVA-1	0	P	2017	2017-02-14
16	32	5	DTIC-2016-SAPCSI-BSBE-5	0	A	2016	2017-02-14
17	32	6	DTIC-2016-SAPCSI-BSBE-6	0	A	2016	2017-02-14
198	32	137	DTIC-2017-SAPCSI-BSBE-137	0	A	2017	2017-02-14
18	32	7	DTIC-2016-SAPCSI-BSBE-7	0	A	2016	2017-02-14
201	87	3	DTIC-2017-SAPCSI-PDGS-3	0	A	2017	2017-02-14
203	32	139	DTIC-2017-SAPCSI-BSBE-139	0	P	2017	2017-02-14
204	32	140	DTIC-2017-SAPCSI-BSBE-140	0	P	2017	2017-02-14
205	32	141	DTIC-2017-SAPCSI-BSBE-141	0	P	2017	2017-02-14
206	32	142	DTIC-2017-SAPCSI-BSBE-142	0	P	2017	2017-02-14
207	32	143	DTIC-2017-SAPCSI-BSBE-143	0	P	2017	2017-02-14
208	32	144	DTIC-2017-SAPCSI-BSBE-144	0	P	2017	2017-02-14
209	32	145	DTIC-2017-SAPCSI-BSBE-145	0	P	2017	2017-02-14
210	32	146	DTIC-2017-SAPCSI-BSBE-146	0	P	2017	2017-02-14
211	32	147	DTIC-2017-SAPCSI-BSBE-147	0	P	2017	2017-02-14
24	32	13	DTIC-2016-SAPCSI-BSBE-13	0	A	2016	2017-02-14
25	32	14	DTIC-2016-SAPCSI-BSBE-14	0	A	2016	2017-02-14
26	32	15	DTIC-2016-SAPCSI-BSBE-15	0	A	2016	2017-02-14
27	32	16	DTIC-2016-SAPCSI-BSBE-16	0	A	2016	2017-02-14
28	32	17	DTIC-2016-SAPCSI-BSBE-17	0	A	2016	2017-02-14
29	32	18	DTIC-2016-SAPCSI-BSBE-18	0	A	2016	2017-02-14
30	32	19	DTIC-2016-SAPCSI-BSBE-19	0	A	2016	2017-02-14
31	32	20	DTIC-2016-SAPCSI-BSBE-20	0	A	2016	2017-02-14
32	32	21	DTIC-2016-SAPCSI-BSBE-21	0	A	2016	2017-02-14
33	32	22	DTIC-2016-SAPCSI-BSBE-22	0	A	2016	2017-02-14
34	32	23	DTIC-2016-SAPCSI-BSBE-23	0	A	2016	2017-02-14
35	32	24	DTIC-2016-SAPCSI-BSBE-24	0	A	2016	2017-02-14
40	32	27	DTIC-2016-SAPCSI-BSBE-27	0	A	2016	2017-02-14
41	32	28	DTIC-2016-SAPCSI-BSBE-28	0	A	2016	2017-02-14
42	32	29	DTIC-2016-SAPCSI-BSBE-29	0	A	2016	2017-02-14
43	32	30	DTIC-2016-SAPCSI-BSBE-30	0	A	2016	2017-02-14
44	32	31	DTIC-2016-SAPCSI-BSBE-31	0	A	2016	2017-02-14
45	32	32	DTIC-2016-SAPCSI-BSBE-32	0	A	2016	2017-02-14
46	32	33	DTIC-2016-SAPCSI-BSBE-33	0	A	2016	2017-02-14
47	32	34	DTIC-2016-SAPCSI-BSBE-34	0	A	2016	2017-02-14
48	32	35	DTIC-2016-SAPCSI-BSBE-35	0	A	2016	2017-02-14
49	32	36	DTIC-2016-SAPCSI-BSBE-36	0	A	2016	2017-02-14
50	32	37	DTIC-2016-SAPCSI-BSBE-37	0	A	2016	2017-02-14
51	32	38	DTIC-2016-SAPCSI-BSBE-38	0	A	2016	2017-02-14
59	32	3	DTIC-2017-SAPCSI-BSBE-3	0	A	2017	2017-02-14
86	32	30	DTIC-2017-SAPCSI-BSBE-30	0	A	2017	2017-02-14
87	32	31	DTIC-2017-SAPCSI-BSBE-31	0	A	2017	2017-02-14
117	32	61	DTIC-2017-SAPCSI-BSBE-61	0	A	2017	2017-02-14
118	32	62	DTIC-2017-SAPCSI-BSBE-62	0	A	2017	2017-02-14
119	32	63	DTIC-2017-SAPCSI-BSBE-63	0	A	2017	2017-02-14
120	32	64	DTIC-2017-SAPCSI-BSBE-64	0	A	2017	2017-02-14
121	32	65	DTIC-2017-SAPCSI-BSBE-65	0	A	2017	2017-02-14
122	32	66	DTIC-2017-SAPCSI-BSBE-66	0	A	2017	2017-02-14
123	32	67	DTIC-2017-SAPCSI-BSBE-67	0	A	2017	2017-02-14
124	32	68	DTIC-2017-SAPCSI-BSBE-68	0	A	2017	2017-02-14
125	32	69	DTIC-2017-SAPCSI-BSBE-69	0	A	2017	2017-02-14
126	32	70	DTIC-2017-SAPCSI-BSBE-70	0	A	2017	2017-02-14
127	32	71	DTIC-2017-SAPCSI-BSBE-71	0	A	2017	2017-02-14
128	32	72	DTIC-2017-SAPCSI-BSBE-72	0	A	2017	2017-02-14
129	32	73	DTIC-2017-SAPCSI-BSBE-73	0	A	2017	2017-02-14
235	96	4	DTIC-2017-SAPCSI-DAGS-4	0	A	2017	2017-02-16
240	96	9	DTIC-2017-SAPCSI-DAGS-9	0	A	2017	2017-02-17
130	32	74	DTIC-2017-SAPCSI-BSBE-74	0	A	2017	2017-02-14
245	96	14	DTIC-2017-SAPCSI-DAGS-14	0	A	2017	2017-02-16
250	96	19	DTIC-2017-SAPCSI-DAGS-19	0	A	2017	2017-02-16
255	96	24	DTIC-2017-SAPCSI-DAGS-24	0	A	2017	2017-02-16
260	96	29	DTIC-2017-SAPCSI-DAGS-29	0	A	2017	2017-02-16
265	96	34	DTIC-2017-SAPCSI-DAGS-34	0	A	2017	2017-02-16
270	96	39	DTIC-2017-SAPCSI-DAGS-39	0	A	2017	2017-02-16
275	96	44	DTIC-2017-SAPCSI-DAGS-44	0	A	2017	2017-02-17
225	87	9	DTIC-2017-SAPCSI-PDGS-9	0	P	2017	2017-02-16
218	32	154	DTIC-2017-SAPCSI-BSBE-154	0	A	2017	2017-02-14
56	32	2	DTIC-2017-SAPCSI-BSBE-2	0	A	2017	2017-02-14
104	32	48	DTIC-2017-SAPCSI-BSBE-48	0	A	2017	2017-02-14
105	32	49	DTIC-2017-SAPCSI-BSBE-49	0	A	2017	2017-02-14
106	32	50	DTIC-2017-SAPCSI-BSBE-50	0	A	2017	2017-02-14
107	32	51	DTIC-2017-SAPCSI-BSBE-51	0	A	2017	2017-02-14
108	32	52	DTIC-2017-SAPCSI-BSBE-52	0	A	2017	2017-02-14
109	32	53	DTIC-2017-SAPCSI-BSBE-53	0	A	2017	2017-02-14
110	32	54	DTIC-2017-SAPCSI-BSBE-54	0	A	2017	2017-02-14
111	32	55	DTIC-2017-SAPCSI-BSBE-55	0	A	2017	2017-02-14
112	32	56	DTIC-2017-SAPCSI-BSBE-56	0	A	2017	2017-02-14
113	32	57	DTIC-2017-SAPCSI-BSBE-57	0	A	2017	2017-02-14
131	32	75	DTIC-2017-SAPCSI-BSBE-75	0	A	2017	2017-02-14
132	32	76	DTIC-2017-SAPCSI-BSBE-76	0	A	2017	2017-02-14
133	32	77	DTIC-2017-SAPCSI-BSBE-77	0	A	2017	2017-02-14
134	32	78	DTIC-2017-SAPCSI-BSBE-78	0	A	2017	2017-02-14
135	32	79	DTIC-2017-SAPCSI-BSBE-79	0	A	2017	2017-02-14
136	32	80	DTIC-2017-SAPCSI-BSBE-80	0	A	2017	2017-02-14
137	32	81	DTIC-2017-SAPCSI-BSBE-81	0	A	2017	2017-02-14
138	32	82	DTIC-2017-SAPCSI-BSBE-82	0	A	2017	2017-02-14
139	32	83	DTIC-2017-SAPCSI-BSBE-83	0	A	2017	2017-02-14
140	32	84	DTIC-2017-SAPCSI-BSBE-84	0	A	2017	2017-02-14
141	32	85	DTIC-2017-SAPCSI-BSBE-85	0	A	2017	2017-02-14
142	32	86	DTIC-2017-SAPCSI-BSBE-86	0	A	2017	2017-02-14
143	32	87	DTIC-2017-SAPCSI-BSBE-87	0	A	2017	2017-02-14
144	32	88	DTIC-2017-SAPCSI-BSBE-88	0	A	2017	2017-02-14
145	32	89	DTIC-2017-SAPCSI-BSBE-89	0	A	2017	2017-02-14
146	32	90	DTIC-2017-SAPCSI-BSBE-90	0	A	2017	2017-02-14
147	32	91	DTIC-2017-SAPCSI-BSBE-91	0	A	2017	2017-02-14
148	32	92	DTIC-2017-SAPCSI-BSBE-92	0	A	2017	2017-02-14
149	32	93	DTIC-2017-SAPCSI-BSBE-93	0	A	2017	2017-02-14
150	32	94	DTIC-2017-SAPCSI-BSBE-94	0	A	2017	2017-02-14
151	32	95	DTIC-2017-SAPCSI-BSBE-95	0	A	2017	2017-02-14
152	32	96	DTIC-2017-SAPCSI-BSBE-96	0	A	2017	2017-02-14
153	32	97	DTIC-2017-SAPCSI-BSBE-97	0	A	2017	2017-02-14
154	32	98	DTIC-2017-SAPCSI-BSBE-98	0	A	2017	2017-02-14
52	32	39	DTIC-2016-SAPCSI-BSBE-39	0	A	2016	2017-02-14
53	32	40	DTIC-2016-SAPCSI-BSBE-40	0	A	2016	2017-02-14
54	32	41	DTIC-2016-SAPCSI-BSBE-41	0	A	2016	2017-02-14
55	32	1	DTIC-2017-SAPCSI-BSBE-1	0	A	2017	2017-02-14
60	32	4	DTIC-2017-SAPCSI-BSBE-4	0	A	2017	2017-02-14
61	32	5	DTIC-2017-SAPCSI-BSBE-5	0	A	2017	2017-02-14
62	32	6	DTIC-2017-SAPCSI-BSBE-6	0	A	2017	2017-02-14
63	32	7	DTIC-2017-SAPCSI-BSBE-7	0	A	2017	2017-02-14
64	32	8	DTIC-2017-SAPCSI-BSBE-8	0	A	2017	2017-02-14
65	32	9	DTIC-2017-SAPCSI-BSBE-9	0	A	2017	2017-02-14
66	32	10	DTIC-2017-SAPCSI-BSBE-10	0	A	2017	2017-02-14
67	32	11	DTIC-2017-SAPCSI-BSBE-11	0	A	2017	2017-02-14
68	32	12	DTIC-2017-SAPCSI-BSBE-12	0	A	2017	2017-02-14
69	32	13	DTIC-2017-SAPCSI-BSBE-13	0	A	2017	2017-02-14
70	32	14	DTIC-2017-SAPCSI-BSBE-14	0	A	2017	2017-02-14
71	32	15	DTIC-2017-SAPCSI-BSBE-15	0	A	2017	2017-02-14
72	32	16	DTIC-2017-SAPCSI-BSBE-16	0	A	2017	2017-02-14
73	32	17	DTIC-2017-SAPCSI-BSBE-17	0	A	2017	2017-02-14
74	32	18	DTIC-2017-SAPCSI-BSBE-18	0	A	2017	2017-02-14
75	32	19	DTIC-2017-SAPCSI-BSBE-19	0	A	2017	2017-02-14
76	32	20	DTIC-2017-SAPCSI-BSBE-20	0	A	2017	2017-02-14
77	32	21	DTIC-2017-SAPCSI-BSBE-21	0	A	2017	2017-02-14
78	32	22	DTIC-2017-SAPCSI-BSBE-22	0	A	2017	2017-02-14
79	32	23	DTIC-2017-SAPCSI-BSBE-23	0	A	2017	2017-02-14
80	32	24	DTIC-2017-SAPCSI-BSBE-24	0	A	2017	2017-02-14
81	32	25	DTIC-2017-SAPCSI-BSBE-25	0	A	2017	2017-02-14
82	32	26	DTIC-2017-SAPCSI-BSBE-26	0	A	2017	2017-02-14
83	32	27	DTIC-2017-SAPCSI-BSBE-27	0	A	2017	2017-02-14
84	32	28	DTIC-2017-SAPCSI-BSBE-28	0	A	2017	2017-02-14
85	32	29	DTIC-2017-SAPCSI-BSBE-29	0	A	2017	2017-02-14
88	32	32	DTIC-2017-SAPCSI-BSBE-32	0	A	2017	2017-02-14
89	32	33	DTIC-2017-SAPCSI-BSBE-33	0	A	2017	2017-02-14
90	32	34	DTIC-2017-SAPCSI-BSBE-34	0	A	2017	2017-02-14
91	32	35	DTIC-2017-SAPCSI-BSBE-35	0	A	2017	2017-02-14
92	32	36	DTIC-2017-SAPCSI-BSBE-36	0	A	2017	2017-02-14
94	32	38	DTIC-2017-SAPCSI-BSBE-38	0	A	2017	2017-02-14
229	87	13	DTIC-2017-SAPCSI-PDGS-13	0	A	2017	2017-02-24
231	87	15	DTIC-2017-SAPCSI-PDGS-15	0	A	2017	2017-02-24
236	96	5	DTIC-2017-SAPCSI-DAGS-5	0	A	2017	2017-02-17
241	96	10	DTIC-2017-SAPCSI-DAGS-10	0	A	2017	2017-02-17
246	96	15	DTIC-2017-SAPCSI-DAGS-15	0	A	2017	2017-02-16
251	96	20	DTIC-2017-SAPCSI-DAGS-20	0	A	2017	2017-02-16
256	96	25	DTIC-2017-SAPCSI-DAGS-25	0	A	2017	2017-02-16
261	96	30	DTIC-2017-SAPCSI-DAGS-30	0	A	2017	2017-02-16
266	96	35	DTIC-2017-SAPCSI-DAGS-35	0	A	2017	2017-02-16
271	96	40	DTIC-2017-SAPCSI-DAGS-40	0	A	2017	2017-02-17
276	96	45	DTIC-2017-SAPCSI-DAGS-45	0	P	2017	2017-02-17
219	96	1	DTIC-2017-SAPCSI-DAGS-1	0	A	2017	2017-01-14
232	87	16	DTIC-2017-SAPCSI-PDGS-16	0	P	2017	2017-02-24
237	96	6	DTIC-2017-SAPCSI-DAGS-6	0	A	2017	2017-02-17
242	96	11	DTIC-2017-SAPCSI-DAGS-11	0	A	2017	2017-02-17
247	96	16	DTIC-2017-SAPCSI-DAGS-16	0	A	2017	2017-02-16
252	96	21	DTIC-2017-SAPCSI-DAGS-21	0	A	2017	2017-02-16
257	96	26	DTIC-2017-SAPCSI-DAGS-26	0	A	2017	2017-02-16
262	96	31	DTIC-2017-SAPCSI-DAGS-31	0	A	2017	2017-02-16
267	96	36	DTIC-2017-SAPCSI-DAGS-36	0	A	2017	2017-02-16
272	96	41	DTIC-2017-SAPCSI-DAGS-41	0	A	2017	2017-02-17
277	96	46	DTIC-2017-SAPCSI-DAGS-46	0	P	2017	2017-02-16
19	32	8	DTIC-2016-SAPCSI-BSBE-8	0	A	2016	2017-02-14
20	32	9	DTIC-2016-SAPCSI-BSBE-9	0	A	2016	2017-02-14
21	32	10	DTIC-2016-SAPCSI-BSBE-10	0	A	2016	2017-02-14
22	32	11	DTIC-2016-SAPCSI-BSBE-11	0	A	2016	2017-02-14
23	32	12	DTIC-2016-SAPCSI-BSBE-12	0	A	2016	2017-02-14
212	32	148	DTIC-2017-SAPCSI-BSBE-148	0	P	2017	2017-02-14
213	32	149	DTIC-2017-SAPCSI-BSBE-149	0	P	2017	2017-02-14
214	32	150	DTIC-2017-SAPCSI-BSBE-150	0	P	2017	2017-02-14
215	32	151	DTIC-2017-SAPCSI-BSBE-151	0	P	2017	2017-02-14
216	32	152	DTIC-2017-SAPCSI-BSBE-152	0	P	2017	2017-02-14
8	32	1	DTIC-2016-SAPCSI-BSBE-1	0	A	2016	2017-02-14
15	32	4	DTIC-2016-SAPCSI-BSBE-4	0	A	2016	2017-02-14
185	32	126	DTIC-2017-SAPCSI-BSBE-126	0	P	2017	2017-02-14
186	32	127	DTIC-2017-SAPCSI-BSBE-127	0	P	2017	2017-02-14
187	32	128	DTIC-2017-SAPCSI-BSBE-128	0	P	2017	2017-02-14
188	32	129	DTIC-2017-SAPCSI-BSBE-129	0	P	2017	2017-02-14
233	96	2	DTIC-2017-SAPCSI-DAGS-2	0	A	2017	2017-02-16
238	96	7	DTIC-2017-SAPCSI-DAGS-7	0	A	2017	2017-02-17
243	96	12	DTIC-2017-SAPCSI-DAGS-12	0	A	2017	2017-02-17
248	96	17	DTIC-2017-SAPCSI-DAGS-17	0	A	2017	2017-02-16
253	96	22	DTIC-2017-SAPCSI-DAGS-22	0	A	2017	2017-02-16
258	96	27	DTIC-2017-SAPCSI-DAGS-27	0	A	2017	2017-02-16
263	96	32	DTIC-2017-SAPCSI-DAGS-32	0	A	2017	2017-02-16
268	96	37	DTIC-2017-SAPCSI-DAGS-37	0	A	2017	2017-02-16
273	96	42	DTIC-2017-SAPCSI-DAGS-42	0	A	2017	2017-02-17
278	20	1	DTIC-2017-SAPCSI-PWAS-1	0	A	2017	2017-02-17
100	32	44	DTIC-2017-SAPCSI-BSBE-44	0	A	2017	2017-02-14
101	32	45	DTIC-2017-SAPCSI-BSBE-45	0	A	2017	2017-02-14
102	32	46	DTIC-2017-SAPCSI-BSBE-46	0	A	2017	2017-02-14
103	32	47	DTIC-2017-SAPCSI-BSBE-47	0	A	2017	2017-02-14
114	32	58	DTIC-2017-SAPCSI-BSBE-58	0	A	2017	2017-02-14
115	32	59	DTIC-2017-SAPCSI-BSBE-59	0	A	2017	2017-02-14
116	32	60	DTIC-2017-SAPCSI-BSBE-60	0	A	2017	2017-02-14
220	87	4	DTIC-2017-SAPCSI-PDGS-4	0	P	2017	2017-02-10
223	87	7	DTIC-2017-SAPCSI-PDGS-7	0	P	2017	2017-02-13
93	32	37	DTIC-2017-SAPCSI-BSBE-37	0	A	2017	2017-02-14
95	32	39	DTIC-2017-SAPCSI-BSBE-39	0	A	2017	2017-02-14
96	32	40	DTIC-2017-SAPCSI-BSBE-40	0	A	2017	2017-02-14
98	32	42	DTIC-2017-SAPCSI-BSBE-42	0	A	2017	2017-02-14
97	32	41	DTIC-2017-SAPCSI-BSBE-41	0	A	2017	2017-02-14
99	32	43	DTIC-2017-SAPCSI-BSBE-43	0	A	2017	2017-02-14
155	32	99	DTIC-2017-SAPCSI-BSBE-99	0	A	2017	2017-02-14
156	32	100	DTIC-2017-SAPCSI-BSBE-100	0	A	2017	2017-02-14
157	32	101	DTIC-2017-SAPCSI-BSBE-101	0	A	2017	2017-02-14
158	32	102	DTIC-2017-SAPCSI-BSBE-102	0	A	2017	2017-02-14
159	32	103	DTIC-2017-SAPCSI-BSBE-103	0	A	2017	2017-02-14
160	32	104	DTIC-2017-SAPCSI-BSBE-104	0	A	2017	2017-02-14
161	32	105	DTIC-2017-SAPCSI-BSBE-105	0	A	2017	2017-02-14
162	32	106	DTIC-2017-SAPCSI-BSBE-106	0	A	2017	2017-02-14
163	32	107	DTIC-2017-SAPCSI-BSBE-107	0	A	2017	2017-02-14
164	32	108	DTIC-2017-SAPCSI-BSBE-108	0	A	2017	2017-02-14
165	32	109	DTIC-2017-SAPCSI-BSBE-109	0	A	2017	2017-02-14
166	32	110	DTIC-2017-SAPCSI-BSBE-110	0	A	2017	2017-02-14
167	32	111	DTIC-2017-SAPCSI-BSBE-111	0	A	2017	2017-02-14
168	32	112	DTIC-2017-SAPCSI-BSBE-112	0	A	2017	2017-02-14
169	32	113	DTIC-2017-SAPCSI-BSBE-113	0	A	2017	2017-02-14
170	32	114	DTIC-2017-SAPCSI-BSBE-114	0	A	2017	2017-02-14
171	32	115	DTIC-2017-SAPCSI-BSBE-115	0	A	2017	2017-02-14
172	32	116	DTIC-2017-SAPCSI-BSBE-116	0	A	2017	2017-02-14
173	32	117	DTIC-2017-SAPCSI-BSBE-117	0	A	2017	2017-02-14
174	32	118	DTIC-2017-SAPCSI-BSBE-118	0	A	2017	2017-02-14
175	32	119	DTIC-2017-SAPCSI-BSBE-119	0	A	2017	2017-02-14
176	32	120	DTIC-2017-SAPCSI-BSBE-120	0	A	2017	2017-02-14
180	32	121	DTIC-2017-SAPCSI-BSBE-121	0	A	2017	2017-02-14
181	32	122	DTIC-2017-SAPCSI-BSBE-122	0	A	2017	2017-02-14
182	32	123	DTIC-2017-SAPCSI-BSBE-123	0	A	2017	2017-02-14
183	32	124	DTIC-2017-SAPCSI-BSBE-124	0	A	2017	2017-02-14
184	32	125	DTIC-2017-SAPCSI-BSBE-125	0	A	2017	2017-02-14
227	87	11	DTIC-2017-SAPCSI-PDGS-11	0	P	2017	2017-02-18
234	96	3	DTIC-2017-SAPCSI-DAGS-3	0	A	2017	2017-02-16
239	96	8	DTIC-2017-SAPCSI-DAGS-8	0	A	2017	2017-02-17
244	96	13	DTIC-2017-SAPCSI-DAGS-13	0	A	2017	2017-02-17
249	96	18	DTIC-2017-SAPCSI-DAGS-18	0	A	2017	2017-02-16
254	96	23	DTIC-2017-SAPCSI-DAGS-23	0	A	2017	2017-02-16
259	96	28	DTIC-2017-SAPCSI-DAGS-28	0	A	2017	2017-02-16
264	96	33	DTIC-2017-SAPCSI-DAGS-33	0	A	2017	2017-02-16
269	96	38	DTIC-2017-SAPCSI-DAGS-38	0	A	2017	2017-02-16
274	96	43	DTIC-2017-SAPCSI-DAGS-43	0	A	2017	2017-02-17
279	20	2	DTIC-2017-SAPCSI-PWAS-2	0	P	2017	2017-02-18
\.


--
-- TOC entry 2665 (class 0 OID 0)
-- Dependencies: 243
-- Name: solicitud_sol_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('solicitud_sol_id_seq', 279, true);


--
-- TOC entry 2581 (class 0 OID 16632)
-- Dependencies: 210
-- Data for Name: tipo_transporte; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY tipo_transporte (tiptra_id, tiptra_nombre, tiptra_tipo, tiptra_sigla) FROM stdin;
1	SZ	Terrestre	SZ
2	Camioneta	Terrestre	CM
3	TAME	Aereo	TAME
4	LAN	Aereo	LAN
5	AVIANCA	Aereo	AVIA
6	BARCO	Maritimo	BARC
7	LANCHA	Maritimo	LANC
8	BOTE	Maritimo	BOTE
9	TREN	Ferreo	TREN
10	OFICIAL	Aereo	OF
\.


--
-- TOC entry 2666 (class 0 OID 0)
-- Dependencies: 244
-- Name: tipo_transporte_tiptra_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('tipo_transporte_tiptra_id_seq', 1, false);


--
-- TOC entry 2582 (class 0 OID 16638)
-- Dependencies: 211
-- Data for Name: transporte_asignado; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY transporte_asignado (traasi_id, tiptra_id, estsol_id, vps_id, trasol_id2, traasi_rutainicio, traasi_rutafin, traasi_fechasalida, traasi_horasalida, traasi_fechallegada, traasi_horallegada, traasi_ticketelectronico, traasi_estado, traasi_observacion) FROM stdin;
\.


--
-- TOC entry 2667 (class 0 OID 0)
-- Dependencies: 245
-- Name: transporte_asignado_traasi_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('transporte_asignado_traasi_id_seq', 1, false);


--
-- TOC entry 2583 (class 0 OID 16651)
-- Dependencies: 212
-- Data for Name: transporte_informe; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY transporte_informe (trainf_id, traasi_id, estinf_id, trainf_rutainicio, trainf_rutafin, trainf_fechasalida, trainf_horasalida, trainf_fechallegada, trainf_horallegada, trainf_seuso) FROM stdin;
\.


--
-- TOC entry 2668 (class 0 OID 0)
-- Dependencies: 246
-- Name: transporte_informe_trainf_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('transporte_informe_trainf_id_seq', 1, false);


--
-- TOC entry 2584 (class 0 OID 16659)
-- Dependencies: 213
-- Data for Name: transporte_solicitado; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY transporte_solicitado (trasol_id, estsol_id, tiptra_id, trasol_rutainicio, trasol_rutafin, trasol_fechasalida, trasol_horasalida, trasol_fechallegada, trasol_horallegada) FROM stdin;
1	5	1	Quito	Guayaquil	2016-06-11	12:32:00	2016-01-12	13:00:00
2	6	1	Quito	Guayaquil	2016-06-11	12:32:00	2016-01-12	13:00:00
3	7	1	Quito	Guayaquil	2016-06-11	12:32:00	2016-01-12	13:00:00
4	8	1	Quito	Guayaquil	2016-06-11	12:32:00	2016-01-12	13:00:00
5	9	1	Quito	Guayaquil	2016-06-11	12:32:00	2016-01-12	13:00:00
6	10	1	Quito	Guayaquil	2016-06-11	12:32:00	2016-01-12	13:00:00
7	11	1	Quito	Guayaquil	2016-06-11	12:32:00	2016-01-12	13:00:00
8	13	1	Quito	Guayaquil	2016-06-11	12:32:00	2016-01-12	13:00:00
9	14	1	Quito	Guayaquil	2016-06-11	12:32:00	2016-01-12	13:00:00
10	15	1	Quito	Guayaquil	2016-06-11	12:32:00	2016-01-12	13:00:00
11	16	1	Quito	Guayaquil	2016-06-11	12:32:00	2016-01-12	13:00:00
12	17	1	Quito	Guayaquil	2016-06-11	12:32:00	2016-01-12	13:00:00
13	18	1	Quito	Guayaquil	2016-06-11	12:32:00	2016-01-12	13:00:00
14	24	1	Quito	Guayaquil	2016-06-11	12:32:00	2016-01-12	13:00:00
15	24	2	Quito	Guayaquil	2016-06-11	12:32:00	2016-01-12	13:00:00
18	78	3	Gualaceo-Azuay	Cuenca-Azuay	2017-11-01	22:33:00	2017-12-01	22:33:00
19	80	3	Gualaceo-Azuay	Cuenca-Azuay	2017-11-01	22:33:00	2017-12-01	22:33:00
20	82	3	Gualaceo-Azuay	Cuenca-Azuay	2017-11-01	22:33:00	2017-12-01	22:33:00
21	84	3	Gualaceo-Azuay	Cuenca-Azuay	2017-11-01	\N	2017-12-01	\N
22	87	3	Gualaceo-Azuay	Cuenca-Azuay	2017-11-01	22:33:00	2017-12-01	22:33:00
23	88	3	Gualaceo-Azuay	Cuenca-Azuay	2017-11-01	22:33:00	2017-12-01	22:33:00
24	90	3	Gualaceo-Azuay	Cuenca-Azuay	2017-11-01	22:33:00	2017-12-01	22:33:00
25	91	3	Gualaceo-Azuay	Cuenca-Azuay	2017-11-01	22:33:00	2017-12-01	22:33:00
26	92	3	Gualaceo-Azuay	Cuenca-Azuay	2017-11-01	22:33:00	2017-12-01	22:33:00
27	94	3	Gualaceo-Azuay	Cuenca-Azuay	2017-11-01	22:33:00	2017-12-01	22:33:00
30	98	3	Gualaceo-Azuay	Cuenca-Azuay	2017-11-01	22:33:00	2017-12-01	22:33:00
31	100	3	Gualaceo-Azuay	Cuenca-Azuay	2017-11-01	22:33:00	2017-12-01	22:33:00
32	101	3	Gualaceo-Azuay	Cuenca-Azuay	2017-11-01	22:33:00	2017-12-01	22:33:00
33	104	3	Gualaceo-Azuay	Cuenca-Azuay	2017-11-01	22:33:00	2017-12-01	22:33:00
34	106	3	Gualaceo-Azuay	Cuenca-Azuay	2017-11-01	22:33:00	2017-12-01	22:33:00
35	108	3	Gualaceo-Azuay	Cuenca-Azuay	2017-11-01	22:33:00	2017-12-01	22:33:00
36	109	3	Gualaceo-Azuay	Cuenca-Azuay	2017-11-01	22:33:00	2017-12-01	22:33:00
37	110	3	Gualaceo-Azuay	Cuenca-Azuay	2017-11-01	22:33:00	2017-12-01	22:33:00
38	111	3	Gualaceo-Azuay	Cuenca-Azuay	2017-11-01	22:33:00	2017-12-01	22:33:00
40	113	3	Gualaceo-Azuay	Cuenca-Azuay	2017-11-01	22:33:00	2017-12-01	22:33:00
41	114	3	Gualaceo-Azuay	Cuenca-Azuay	2017-11-01	22:33:00	2017-12-01	22:33:00
42	115	3	Gualaceo-Azuay	Cuenca-Azuay	2017-11-01	22:33:00	2017-12-01	22:33:00
43	116	3	Gualaceo-Azuay	Cuenca-Azuay	2017-11-01	22:33:00	2017-12-01	22:33:00
44	120	3	Gualaceo-Azuay	Cuenca-Azuay	2017-11-01	22:33:00	2017-12-01	22:33:00
45	121	3	Gualaceo-Azuay	Cuenca-Azuay	\N	22:33:00	\N	22:33:00
46	121	1	Santa Isabel-Azuay	Camilo Ponce Enríquez-Azuay	\N	22:37:00	\N	22:37:00
47	121	6	Sígsig-Azuay	San Fernando-Azuay	\N	22:37:00	\N	22:37:00
48	121	9	Caluma-Bolívar	La Troncal-Cañar	\N	22:37:00	\N	22:37:00
49	122	3	Gualaceo-Azuay	Cuenca-Azuay	\N	22:33:00	\N	22:33:00
50	122	1	Santa Isabel-Azuay	Camilo Ponce Enríquez-Azuay	\N	22:37:00	\N	22:37:00
51	122	6	Sígsig-Azuay	San Fernando-Azuay	\N	22:37:00	\N	22:37:00
52	122	9	Caluma-Bolívar	La Troncal-Cañar	\N	22:37:00	\N	22:37:00
53	123	3	Gualaceo-Azuay	Cuenca-Azuay	\N	22:33:00	\N	22:33:00
54	123	1	Santa Isabel-Azuay	Camilo Ponce Enríquez-Azuay	\N	22:37:00	\N	22:37:00
55	123	6	Sígsig-Azuay	San Fernando-Azuay	\N	22:37:00	\N	22:37:00
56	123	9	Caluma-Bolívar	La Troncal-Cañar	\N	22:37:00	\N	22:37:00
58	126	3	Gualaceo-Azuay	Cuenca-Azuay	2017-11-01	22:33:00	2017-12-01	22:33:00
59	127	3	Gualaceo-Azuay	Cuenca-Azuay	2017-01-11	22:33:00	2017-01-12	22:33:00
60	127	1	Santa Isabel-Azuay	Camilo Ponce Enríquez-Azuay	2017-01-13	22:37:00	2017-01-14	22:37:00
61	127	6	Sígsig-Azuay	San Fernando-Azuay	2017-01-17	22:37:00	2017-01-18	22:37:00
62	127	9	Caluma-Bolívar	La Troncal-Cañar	2017-01-19	22:37:00	2017-01-20	22:37:00
63	128	3	San Felipe de Oña-Azuay	Sevilla de Oro-Azuay	2017-12-01	14:50:00	2018-01-01	14:50:00
64	128	1	Azogues-Cañar	Suscal-Cañar	2018-01-01	14:50:00	2018-02-01	14:50:00
65	128	6	Pallatanga-Chimborazo	Cajabamba-Chimborazo	2018-02-01	14:51:00	2018-03-01	14:51:00
66	128	9	Zapotillo-Loja	Celica-Loja	2018-03-01	14:51:00	2018-04-01	14:51:00
67	128	1	Coca-Orellana	El Chaco-Napo	2018-04-01	14:51:00	2018-06-01	14:51:00
68	129	3	San Felipe de Oña-Azuay	Sevilla de Oro-Azuay	2017-12-01	14:50:00	2018-01-01	14:50:00
69	129	1	Azogues-Cañar	Suscal-Cañar	2018-01-01	14:50:00	2018-02-01	14:50:00
70	129	6	Pallatanga-Chimborazo	Cajabamba-Chimborazo	2018-02-01	14:51:00	2018-03-01	14:51:00
71	129	9	Zapotillo-Loja	Celica-Loja	2018-03-01	14:51:00	2018-04-01	14:51:00
72	129	1	Coca-Orellana	El Chaco-Napo	2018-04-01	14:51:00	2018-06-01	14:51:00
73	130	3	San Felipe de Oña-Azuay	Sevilla de Oro-Azuay	2017-12-01	14:50:00	2018-01-01	14:50:00
74	130	1	Azogues-Cañar	Suscal-Cañar	2018-01-01	14:50:00	2018-02-01	14:50:00
75	130	6	Pallatanga-Chimborazo	Cajabamba-Chimborazo	2018-02-01	14:51:00	2018-03-01	14:51:00
76	130	9	Zapotillo-Loja	Celica-Loja	2018-03-01	14:51:00	2018-04-01	14:51:00
77	130	1	Coca-Orellana	El Chaco-Napo	2018-04-01	14:51:00	2018-06-01	14:51:00
78	131	3	San Felipe de Oña-Azuay	Sevilla de Oro-Azuay	2017-12-01	14:50:00	2018-01-01	14:50:00
79	131	1	Azogues-Cañar	Suscal-Cañar	2018-01-01	14:50:00	2018-02-01	14:50:00
80	131	6	Pallatanga-Chimborazo	Cajabamba-Chimborazo	2018-02-01	14:51:00	2018-03-01	14:51:00
81	131	9	Zapotillo-Loja	Celica-Loja	2018-03-01	14:51:00	2018-04-01	14:51:00
82	131	1	Coca-Orellana	El Chaco-Napo	2018-04-01	14:51:00	2018-06-01	14:51:00
83	132	3	Santa Isabel-Azuay	Cuenca-Azuay	2017-12-01	16:08:00	2017-12-01	16:08:00
84	139	3	San Felipe de Oña-Azuay	Sevilla de Oro-Azuay	2017-12-01	14:50:00	2018-01-01	14:50:00
85	139	1	Azogues-Cañar	Suscal-Cañar	2018-01-01	14:50:00	2018-02-01	14:50:00
86	139	6	Pallatanga-Chimborazo	Cajabamba-Chimborazo	2018-02-01	14:51:00	2018-03-01	14:51:00
87	139	9	Zapotillo-Loja	Celica-Loja	2018-03-01	14:51:00	2018-04-01	14:51:00
88	139	1	Coca-Orellana	El Chaco-Napo	2018-04-01	14:51:00	2018-06-01	14:51:00
89	140	3	Simón Bolívar-Guayas	Cotacachi-Imbabura	2019-07-01	16:28:00	2019-07-01	17:33:00
90	140	1	Vinces-Los Ríos	Macas-Morona Santiago	2017-01-02	22:31:00	2017-02-02	19:32:00
92	141	3	Simón Bolívar-Guayas	Cotacachi-Imbabura	2019-07-01	16:28:00	2019-07-01	17:33:00
93	141	1	Vinces-Los Ríos	Macas-Morona Santiago	2017-01-02	22:31:00	2017-02-02	19:32:00
95	142	3	Simón Bolívar-Guayas	Cotacachi-Imbabura	2019-07-01	16:28:00	2019-07-01	17:33:00
96	142	1	Vinces-Los Ríos	Macas-Morona Santiago	2017-01-02	22:31:00	2017-02-02	19:32:00
97	142	6	Santa Ana de Vuelta Larga-Manabí	Tena-Napo	2017-02-02	16:29:00	2017-03-02	16:29:00
98	142	9	Santiago de Méndez-Morona Santiago	Sangolquí-Pichincha	2017-04-02	07:29:00	2017-04-02	16:20:00
99	142	6	Machachi-Pichincha	Shushufindi-Sucumbios	2017-05-02	16:30:00	2017-05-02	21:30:00
100	143	3	Camilo Ponce Enríquez-Azuay	Piñas-El Oro	2017-12-01	20:39:00	2018-01-01	01:39:00
101	143	1	Chillanes-Bolívar	Naranjal-Guayas	2018-01-01	16:39:00	2018-02-01	16:45:00
102	143	6	Saquisilí-Cotopaxi	Atuntaqui-Imbabura	2018-02-01	11:39:00	2018-02-01	09:34:00
103	143	9	Yaguachi-Guayas	Quinsaloma-Los Ríos	2018-03-01	21:40:00	2018-03-01	00:40:00
104	143	1	Babahoyo-Los Ríos	Sucre-Manabí	2018-04-01	16:40:00	2018-05-01	16:40:00
105	144	3	Camilo Ponce Enríquez-Azuay	Piñas-El Oro	2017-01-12	20:39:00	2017-01-13	01:39:00
106	144	1	Chillanes-Bolívar	Naranjal-Guayas	2017-01-13	16:39:00	2017-01-14	16:45:00
107	144	6	Saquisilí-Cotopaxi	Atuntaqui-Imbabura	2017-01-14	11:39:00	2017-01-14	09:34:00
108	144	9	Yaguachi-Guayas	Quinsaloma-Los Ríos	2017-01-15	21:40:00	2017-01-15	00:40:00
109	144	1	Babahoyo-Los Ríos	Sucre-Manabí	2017-01-16	16:40:00	2017-01-17	16:40:00
110	145	3	Cuenca-Azuay	Paute-Azuay	2017-01-20	10:51:00	2017-01-21	08:48:00
111	145	3	Paute-Azuay	Quito-Pichincha	2017-01-21	08:51:00	2017-01-22	08:53:00
112	146	3	Simón Bolívar-Guayas	Cotacachi-Imbabura	2017-01-31	16:28:00	2017-01-31	17:33:00
113	146	1	Vinces-Los Ríos	Macas-Morona Santiago	2017-02-01	22:31:00	2017-02-02	19:32:00
114	146	6	Santa Ana de Vuelta Larga-Manabí	Tena-Napo	2017-02-02	16:29:00	2017-02-03	16:29:00
115	146	9	Santiago de Méndez-Morona Santiago	Sangolquí-Pichincha	2017-02-04	07:29:00	2017-02-04	16:20:00
116	146	6	Machachi-Pichincha	Shushufindi-Sucumbios	2017-02-05	16:30:00	2017-02-05	21:30:00
117	147	3	El Pan-Azuay	Guaranda-Bolívar	2017-01-25	14:23:00	2017-01-26	12:23:00
118	147	1	Mira-Carchi	La Maná-Cotopaxi	2017-01-26	17:23:00	2017-01-27	13:29:00
119	148	3	Caluma-Bolívar	Echeandía-Bolívar	2017-01-25	13:28:00	2017-01-26	13:28:00
120	148	1	Cumandá-Chimborazo	Guano-Chimborazo	2017-01-26	13:28:00	2017-01-27	13:28:00
121	148	6	Portovelo-El Oro	Chilla-El Oro	2017-01-27	13:28:00	2017-01-29	13:28:00
122	149	3	Santa Isabel-Azuay	Paute-Azuay	2017-01-25	14:26:00	2017-01-29	14:26:00
123	150	3	San Fernando-Azuay	San Felipe de Oña-Azuay	2017-01-25	14:47:00	2017-01-29	14:50:00
124	151	6	San Miguel-Bolívar	Nabón-Azuay	2017-01-25	16:10:00	2017-01-27	16:10:00
125	152	1	Guachapala-Azuay	Sevilla de Oro-Azuay	2017-01-26	16:15:00	2017-01-27	16:15:00
126	156	1	Paute-Azuay	Camilo Ponce Enríquez-Azuay	2017-01-25	19:42:00	2017-01-27	19:48:00
127	157	3	Santa Isabel-Azuay	Guaranda-Bolívar	2017-01-27	11:02:00	2017-01-28	11:02:00
128	167	3	Cuenca-Azuay	Sevilla de Oro-Azuay	2017-02-15	15:50:00	2017-02-17	15:50:00
129	167	3	Guaranda-Bolívar	Guamote-Chimborazo	2017-02-17	15:50:00	2017-02-19	15:50:00
131	187	1	Cuenca-Azuay	Cuenca-Azuay	2017-02-18	10:26:00	2017-02-19	10:26:00
132	187	3	Quito-Pichincha	Cuenca-Azuay	2017-02-16	10:27:00	2017-02-17	10:27:00
133	188	3	Cuenca-Azuay	Chordeleg-Azuay	2017-02-17	16:54:00	2017-02-18	17:55:00
134	188	6	Caluma-Bolívar	San Miguel-Bolívar	2017-02-18	16:54:00	2017-02-19	22:54:00
135	189	3	Santa Isabel-Azuay	Cuenca-Azuay	2017-02-18	09:21:00	2017-02-18	08:20:00
136	189	1	Chillanes-Bolívar	Cumandá-Chimborazo	2017-02-19	06:22:00	2017-02-20	03:22:00
137	190	3	Quito-Pichincha	Cuenca-Azuay	2017-02-18	09:24:00	2017-02-18	17:24:00
138	190	3	Cuenca-Azuay	Quito-Pichincha	2017-02-19	09:24:00	2017-02-20	16:24:00
\.


--
-- TOC entry 2669 (class 0 OID 0)
-- Dependencies: 247
-- Name: transporte_solicitado_trasol_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('transporte_solicitado_trasol_id_seq', 138, true);


--
-- TOC entry 2585 (class 0 OID 16667)
-- Dependencies: 214
-- Data for Name: transporte_solicitadoextra; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY transporte_solicitadoextra (trasol_id2, tiptra_id, estsol_id, trasol_rutainicio, trasol_rutafin, trasol_fechasalida, trasol_horasalida, trasol_fechallegada, trasol_horallegada) FROM stdin;
\.


--
-- TOC entry 2670 (class 0 OID 0)
-- Dependencies: 248
-- Name: transporte_solicitadoextra_trasol_id2_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('transporte_solicitadoextra_trasol_id2_seq', 1, false);


--
-- TOC entry 2586 (class 0 OID 16675)
-- Dependencies: 215
-- Data for Name: vehiculo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY vehiculo (veh_id, veh_modelo, veh_marca, veh_placa, veh_estado) FROM stdin;
\.


--
-- TOC entry 2587 (class 0 OID 16681)
-- Dependencies: 216
-- Data for Name: vehiculo_persona_comision; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY vehiculo_persona_comision (vps_id, per_id, veh_id, com_id, vps_fechainicio, vps_horainicio, vps_fechafin, vps_horafin) FROM stdin;
\.


--
-- TOC entry 2671 (class 0 OID 0)
-- Dependencies: 250
-- Name: vehiculo_persona_comision_vps_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('vehiculo_persona_comision_vps_id_seq', 1, false);


--
-- TOC entry 2672 (class 0 OID 0)
-- Dependencies: 249
-- Name: vehiculo_veh_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('vehiculo_veh_id_seq', 1, false);


--
-- TOC entry 2373 (class 2606 OID 49195)
-- Name: Modrol_Carper_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY modrol_carper
    ADD CONSTRAINT "Modrol_Carper_pk" PRIMARY KEY (mrcp_id);


--
-- TOC entry 2386 (class 2606 OID 57707)
-- Name: ciudad_informe_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY ciudad_informe
    ADD CONSTRAINT ciudad_informe_pk PRIMARY KEY (ciuinf_id);


--
-- TOC entry 2380 (class 2606 OID 57682)
-- Name: estado_informe_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY estado_informe
    ADD CONSTRAINT estado_informe_pkey PRIMARY KEY (estinf_id);


--
-- TOC entry 2377 (class 2606 OID 57423)
-- Name: pais_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY pais
    ADD CONSTRAINT pais_pkey PRIMARY KEY (pais_id);


--
-- TOC entry 2375 (class 2606 OID 49215)
-- Name: pk_Modrol_Carper; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY modrol_carper
    ADD CONSTRAINT "pk_Modrol_Carper" UNIQUE (mrcp_id);


--
-- TOC entry 2222 (class 2606 OID 17080)
-- Name: pk_acceso_persona; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY acceso_persona
    ADD CONSTRAINT pk_acceso_persona PRIMARY KEY (aper_usuario);


--
-- TOC entry 2226 (class 2606 OID 16408)
-- Name: pk_anexo; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY anexo
    ADD CONSTRAINT pk_anexo PRIMARY KEY (solanex_id);


--
-- TOC entry 2230 (class 2606 OID 16418)
-- Name: pk_anexo_informe; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY anexo_informe
    ADD CONSTRAINT pk_anexo_informe PRIMARY KEY (infanex_id);


--
-- TOC entry 2234 (class 2606 OID 16425)
-- Name: pk_autorizacion; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY autorizacion
    ADD CONSTRAINT pk_autorizacion PRIMARY KEY (aut_id);


--
-- TOC entry 2239 (class 2606 OID 16435)
-- Name: pk_autorizado_informe; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY autorizado_informe
    ADD CONSTRAINT pk_autorizado_informe PRIMARY KEY (infaut_id);


--
-- TOC entry 2243 (class 2606 OID 16446)
-- Name: pk_autorizado_solicitud; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY autorizado_solicitud
    ADD CONSTRAINT pk_autorizado_solicitud PRIMARY KEY (solaut_id);


--
-- TOC entry 2247 (class 2606 OID 16455)
-- Name: pk_banco; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY banco
    ADD CONSTRAINT pk_banco PRIMARY KEY (ban_id);


--
-- TOC entry 2252 (class 2606 OID 16461)
-- Name: pk_banco_persona; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY banco_persona
    ADD CONSTRAINT pk_banco_persona PRIMARY KEY (banper_id);


--
-- TOC entry 2256 (class 2606 OID 16469)
-- Name: pk_cargo; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY cargo
    ADD CONSTRAINT pk_cargo PRIMARY KEY (car_id);


--
-- TOC entry 2262 (class 2606 OID 16477)
-- Name: pk_cargo_persona; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY cargo_persona
    ADD CONSTRAINT pk_cargo_persona PRIMARY KEY (carper_id);


--
-- TOC entry 2265 (class 2606 OID 16485)
-- Name: pk_ciudad; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY ciudad
    ADD CONSTRAINT pk_ciudad PRIMARY KEY (ciu_id);


--
-- TOC entry 2271 (class 2606 OID 16492)
-- Name: pk_ciudad_comision; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY ciudad_comision
    ADD CONSTRAINT pk_ciudad_comision PRIMARY KEY (ciucom_id);


--
-- TOC entry 2276 (class 2606 OID 16500)
-- Name: pk_ciudad_solicitud; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY ciudad_solicitud
    ADD CONSTRAINT pk_ciudad_solicitud PRIMARY KEY (ciusol_id);


--
-- TOC entry 2279 (class 2606 OID 16511)
-- Name: pk_comision; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY comision
    ADD CONSTRAINT pk_comision PRIMARY KEY (com_id);


--
-- TOC entry 2283 (class 2606 OID 16517)
-- Name: pk_departamento; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY departamento
    ADD CONSTRAINT pk_departamento PRIMARY KEY (dep_id);


--
-- TOC entry 2286 (class 2606 OID 16527)
-- Name: pk_estado_solicitud; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY estado_solicitud
    ADD CONSTRAINT pk_estado_solicitud PRIMARY KEY (estsol_id);


--
-- TOC entry 2290 (class 2606 OID 16537)
-- Name: pk_fondo; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY fondo
    ADD CONSTRAINT pk_fondo PRIMARY KEY (fon_id);


--
-- TOC entry 2296 (class 2606 OID 16544)
-- Name: pk_gasto; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY gasto
    ADD CONSTRAINT pk_gasto PRIMARY KEY (gas_id);


--
-- TOC entry 2299 (class 2606 OID 16555)
-- Name: pk_informe; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY informe
    ADD CONSTRAINT pk_informe PRIMARY KEY (inf_id);


--
-- TOC entry 2303 (class 2606 OID 16566)
-- Name: pk_institucion; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY institucion
    ADD CONSTRAINT pk_institucion PRIMARY KEY (ins_id);


--
-- TOC entry 2306 (class 2606 OID 16575)
-- Name: pk_modulo; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY modulo
    ADD CONSTRAINT pk_modulo PRIMARY KEY (mod_id);


--
-- TOC entry 2310 (class 2606 OID 16584)
-- Name: pk_modulo_rol; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY modulo_rol
    ADD CONSTRAINT pk_modulo_rol PRIMARY KEY (modrol_id);


--
-- TOC entry 2314 (class 2606 OID 16595)
-- Name: pk_nousado; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY nousado
    ADD CONSTRAINT pk_nousado PRIMARY KEY (nousa_id);


--
-- TOC entry 2318 (class 2606 OID 16602)
-- Name: pk_persona; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY persona
    ADD CONSTRAINT pk_persona PRIMARY KEY (per_id);


--
-- TOC entry 2323 (class 2606 OID 16608)
-- Name: pk_persona_comision; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY persona_comision
    ADD CONSTRAINT pk_persona_comision PRIMARY KEY (percom_id);


--
-- TOC entry 2327 (class 2606 OID 16617)
-- Name: pk_provincia; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY provincia
    ADD CONSTRAINT pk_provincia PRIMARY KEY (prov_id);


--
-- TOC entry 2330 (class 2606 OID 16623)
-- Name: pk_rol; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY rol
    ADD CONSTRAINT pk_rol PRIMARY KEY (rol_id);


--
-- TOC entry 2334 (class 2606 OID 16629)
-- Name: pk_solicitud; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY solicitud
    ADD CONSTRAINT pk_solicitud PRIMARY KEY (sol_id);


--
-- TOC entry 2337 (class 2606 OID 16636)
-- Name: pk_tipo_transporte; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY tipo_transporte
    ADD CONSTRAINT pk_tipo_transporte PRIMARY KEY (tiptra_id);


--
-- TOC entry 2340 (class 2606 OID 16645)
-- Name: pk_transporte_asignado; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY transporte_asignado
    ADD CONSTRAINT pk_transporte_asignado PRIMARY KEY (traasi_id);


--
-- TOC entry 2348 (class 2606 OID 16655)
-- Name: pk_transporte_informe; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY transporte_informe
    ADD CONSTRAINT pk_transporte_informe PRIMARY KEY (trainf_id);


--
-- TOC entry 2352 (class 2606 OID 16663)
-- Name: pk_transporte_solicitado; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY transporte_solicitado
    ADD CONSTRAINT pk_transporte_solicitado PRIMARY KEY (trasol_id);


--
-- TOC entry 2357 (class 2606 OID 16671)
-- Name: pk_transporte_solicitadoextra; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY transporte_solicitadoextra
    ADD CONSTRAINT pk_transporte_solicitadoextra PRIMARY KEY (trasol_id2);


--
-- TOC entry 2362 (class 2606 OID 16679)
-- Name: pk_vehiculo; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY vehiculo
    ADD CONSTRAINT pk_vehiculo PRIMARY KEY (veh_id);


--
-- TOC entry 2367 (class 2606 OID 16685)
-- Name: pk_vehiculo_persona_comision; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY vehiculo_persona_comision
    ADD CONSTRAINT pk_vehiculo_persona_comision PRIMARY KEY (vps_id);


--
-- TOC entry 2370 (class 1259 OID 49207)
-- Name: Modrol_Carper_carper_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "Modrol_Carper_carper_fk" ON modrol_carper USING btree (carper_id);


--
-- TOC entry 2371 (class 1259 OID 49206)
-- Name: Modrol_Carper_modrol_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "Modrol_Carper_modrol_fk" ON modrol_carper USING btree (modrol_id);


--
-- TOC entry 2219 (class 1259 OID 17081)
-- Name: acceso_persona_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX acceso_persona_pk ON acceso_persona USING btree (aper_usuario);


--
-- TOC entry 2220 (class 1259 OID 16400)
-- Name: accper_per_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX accper_per_fk ON acceso_persona USING btree (per_id);


--
-- TOC entry 2223 (class 1259 OID 16410)
-- Name: ane_sol_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ane_sol_fk ON anexo USING btree (estsol_id);


--
-- TOC entry 2227 (class 1259 OID 16419)
-- Name: anexo_informe_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX anexo_informe_pk ON anexo_informe USING btree (infanex_id);


--
-- TOC entry 2224 (class 1259 OID 16409)
-- Name: anexo_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX anexo_pk ON anexo USING btree (solanex_id);


--
-- TOC entry 2235 (class 1259 OID 16438)
-- Name: aut_autinf_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX aut_autinf_fk ON autorizado_informe USING btree (aut_id);


--
-- TOC entry 2240 (class 1259 OID 16450)
-- Name: aut_autsol_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX aut_autsol_fk ON autorizado_solicitud USING btree (aut_id);


--
-- TOC entry 2231 (class 1259 OID 16426)
-- Name: autorizacion_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX autorizacion_pk ON autorizacion USING btree (aut_id);


--
-- TOC entry 2236 (class 1259 OID 16436)
-- Name: autorizado_informe_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX autorizado_informe_pk ON autorizado_informe USING btree (infaut_id);


--
-- TOC entry 2241 (class 1259 OID 16447)
-- Name: autorizado_solicitud_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX autorizado_solicitud_pk ON autorizado_solicitud USING btree (solaut_id);


--
-- TOC entry 2248 (class 1259 OID 16463)
-- Name: ban_banper_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ban_banper_fk ON banco_persona USING btree (ban_id);


--
-- TOC entry 2249 (class 1259 OID 16462)
-- Name: banco_persona_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX banco_persona_pk ON banco_persona USING btree (banper_id);


--
-- TOC entry 2245 (class 1259 OID 16456)
-- Name: banco_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX banco_pk ON banco USING btree (ban_id);


--
-- TOC entry 2250 (class 1259 OID 16464)
-- Name: banper_per_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX banper_per_fk ON banco_persona USING btree (per_id);


--
-- TOC entry 2258 (class 1259 OID 16478)
-- Name: cargo_persona_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX cargo_persona_pk ON cargo_persona USING btree (carper_id);


--
-- TOC entry 2253 (class 1259 OID 16470)
-- Name: cargo_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX cargo_pk ON cargo USING btree (car_id);


--
-- TOC entry 2259 (class 1259 OID 16479)
-- Name: carper_car_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX carper_car_fk ON cargo_persona USING btree (car_id);


--
-- TOC entry 2267 (class 1259 OID 16494)
-- Name: ciu_ciucom_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ciu_ciucom_fk ON ciudad_comision USING btree (ciu_id);


--
-- TOC entry 2383 (class 1259 OID 57710)
-- Name: ciu_ciuinf_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ciu_ciuinf_fk ON ciudad_informe USING btree (ciu_id);


--
-- TOC entry 2272 (class 1259 OID 16503)
-- Name: ciu_ciusol_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ciu_ciusol_fk ON ciudad_solicitud USING btree (ciu_id);


--
-- TOC entry 2292 (class 1259 OID 16547)
-- Name: ciu_gas_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ciu_gas_fk ON gasto USING btree (ciuinf_id);


--
-- TOC entry 2384 (class 1259 OID 57708)
-- Name: ciu_inf_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ciu_inf_fk ON ciudad_informe USING btree (estinf_id);


--
-- TOC entry 2273 (class 1259 OID 16502)
-- Name: ciu_sol_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ciu_sol_fk ON ciudad_solicitud USING btree (estsol_id);


--
-- TOC entry 2268 (class 1259 OID 16493)
-- Name: ciudad_comision_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ciudad_comision_pk ON ciudad_comision USING btree (ciucom_id);


--
-- TOC entry 2263 (class 1259 OID 16486)
-- Name: ciudad_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ciudad_pk ON ciudad USING btree (ciu_id);


--
-- TOC entry 2274 (class 1259 OID 16501)
-- Name: ciudad_solicitud_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ciudad_solicitud_pk ON ciudad_solicitud USING btree (ciusol_id);


--
-- TOC entry 2269 (class 1259 OID 16495)
-- Name: com_ciucom_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX com_ciucom_fk ON ciudad_comision USING btree (com_id);


--
-- TOC entry 2319 (class 1259 OID 16611)
-- Name: com_percom_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX com_percom_fk ON persona_comision USING btree (com_id);


--
-- TOC entry 2364 (class 1259 OID 16689)
-- Name: com_vps_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX com_vps_fk ON vehiculo_persona_comision USING btree (com_id);


--
-- TOC entry 2277 (class 1259 OID 16512)
-- Name: comision_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX comision_pk ON comision USING btree (com_id);


--
-- TOC entry 2254 (class 1259 OID 16471)
-- Name: dep_car_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX dep_car_fk ON cargo USING btree (dep_id);


--
-- TOC entry 2280 (class 1259 OID 16518)
-- Name: departamento_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX departamento_pk ON departamento USING btree (dep_id);


--
-- TOC entry 2378 (class 1259 OID 57672)
-- Name: estado_informe_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX estado_informe_pk ON estado_informe USING btree (estinf_id);


--
-- TOC entry 2284 (class 1259 OID 16528)
-- Name: estado_solicitud_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX estado_solicitud_pk ON estado_solicitud USING btree (estsol_id);


--
-- TOC entry 2293 (class 1259 OID 16546)
-- Name: estinf_gas_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX estinf_gas_fk ON gasto USING btree (estinf_id);


--
-- TOC entry 2346 (class 1259 OID 16658)
-- Name: estinf_trainf_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX estinf_trainf_fk ON transporte_informe USING btree (estinf_id);


--
-- TOC entry 2325 (class 1259 OID 57429)
-- Name: fk_pais_prov; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fk_pais_prov ON provincia USING btree (pais_id);


--
-- TOC entry 2288 (class 1259 OID 16538)
-- Name: fondo_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX fondo_pk ON fondo USING btree (fon_id);


--
-- TOC entry 2294 (class 1259 OID 16545)
-- Name: gasto_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX gasto_pk ON gasto USING btree (gas_id);


--
-- TOC entry 2228 (class 1259 OID 16420)
-- Name: inf_aneinf_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX inf_aneinf_fk ON anexo_informe USING btree (estinf_id);


--
-- TOC entry 2237 (class 1259 OID 16437)
-- Name: inf_aut_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX inf_aut_fk ON autorizado_informe USING btree (estinf_id);


--
-- TOC entry 2381 (class 1259 OID 57674)
-- Name: inf_estinf_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX inf_estinf_fk ON estado_informe USING btree (inf_id);


--
-- TOC entry 2297 (class 1259 OID 16556)
-- Name: informe_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX informe_pk ON informe USING btree (inf_id);


--
-- TOC entry 2281 (class 1259 OID 16519)
-- Name: ins_dep_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ins_dep_fk ON departamento USING btree (ins_id);


--
-- TOC entry 2301 (class 1259 OID 16567)
-- Name: institucion_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX institucion_pk ON institucion USING btree (ins_id);


--
-- TOC entry 2307 (class 1259 OID 16587)
-- Name: mod_modrol_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX mod_modrol_fk ON modulo_rol USING btree (mod_id);


--
-- TOC entry 2304 (class 1259 OID 16576)
-- Name: modulo_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX modulo_pk ON modulo USING btree (mod_id);


--
-- TOC entry 2308 (class 1259 OID 16585)
-- Name: modulo_rol_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX modulo_rol_pk ON modulo_rol USING btree (modrol_id);


--
-- TOC entry 2312 (class 1259 OID 16596)
-- Name: nousado_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX nousado_pk ON nousado USING btree (nousa_id);


--
-- TOC entry 2232 (class 1259 OID 16427)
-- Name: per_aut_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX per_aut_fk ON autorizacion USING btree (per_id);


--
-- TOC entry 2260 (class 1259 OID 16480)
-- Name: per_carper_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX per_carper_fk ON cargo_persona USING btree (per_id);


--
-- TOC entry 2320 (class 1259 OID 16610)
-- Name: per_percom_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX per_percom_fk ON persona_comision USING btree (per_id);


--
-- TOC entry 2332 (class 1259 OID 16631)
-- Name: per_sol_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX per_sol_fk ON solicitud USING btree (per_id);


--
-- TOC entry 2365 (class 1259 OID 16688)
-- Name: per_vps_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX per_vps_fk ON vehiculo_persona_comision USING btree (per_id);


--
-- TOC entry 2321 (class 1259 OID 16609)
-- Name: persona_comision_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX persona_comision_pk ON persona_comision USING btree (percom_id);


--
-- TOC entry 2316 (class 1259 OID 16603)
-- Name: persona_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX persona_pk ON persona USING btree (per_id);


--
-- TOC entry 2387 (class 1259 OID 57709)
-- Name: pk_ciudad_informe; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pk_ciudad_informe ON ciudad_informe USING btree (ciuinf_id);


--
-- TOC entry 2382 (class 1259 OID 57673)
-- Name: pk_estado_informe; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pk_estado_informe ON estado_informe USING btree (estinf_id);


--
-- TOC entry 2266 (class 1259 OID 16487)
-- Name: pro_ciu_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pro_ciu_fk ON ciudad USING btree (prov_id);


--
-- TOC entry 2328 (class 1259 OID 16618)
-- Name: provincia_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX provincia_pk ON provincia USING btree (prov_id);


--
-- TOC entry 2257 (class 1259 OID 57418)
-- Name: rol_car_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX rol_car_fk ON cargo USING btree (rol_id);


--
-- TOC entry 2311 (class 1259 OID 16586)
-- Name: rol_modrol_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX rol_modrol_fk ON modulo_rol USING btree (rol_id);


--
-- TOC entry 2331 (class 1259 OID 16624)
-- Name: rol_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX rol_pk ON rol USING btree (rol_id);


--
-- TOC entry 2244 (class 1259 OID 16448)
-- Name: sol_aut_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX sol_aut_fk ON autorizado_solicitud USING btree (estsol_id);


--
-- TOC entry 2287 (class 1259 OID 16529)
-- Name: sol_estsol_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX sol_estsol_fk ON estado_solicitud USING btree (sol_id);


--
-- TOC entry 2300 (class 1259 OID 16557)
-- Name: sol_inf_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX sol_inf_fk ON informe USING btree (sol_id);


--
-- TOC entry 2324 (class 1259 OID 16612)
-- Name: sol_percom_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX sol_percom_fk ON persona_comision USING btree (sol_id);


--
-- TOC entry 2341 (class 1259 OID 16647)
-- Name: sol_traasi_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX sol_traasi_fk ON transporte_asignado USING btree (estsol_id);


--
-- TOC entry 2358 (class 1259 OID 16674)
-- Name: sol_tsolext_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX sol_tsolext_fk ON transporte_solicitadoextra USING btree (estsol_id);


--
-- TOC entry 2291 (class 1259 OID 16539)
-- Name: sol_val_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX sol_val_fk ON fondo USING btree (sol_id);


--
-- TOC entry 2335 (class 1259 OID 16630)
-- Name: solicitud_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX solicitud_pk ON solicitud USING btree (sol_id);


--
-- TOC entry 2338 (class 1259 OID 16637)
-- Name: tipo_transporte_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX tipo_transporte_pk ON tipo_transporte USING btree (tiptra_id);


--
-- TOC entry 2342 (class 1259 OID 16648)
-- Name: tiptra_traasi_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX tiptra_traasi_fk ON transporte_asignado USING btree (tiptra_id);


--
-- TOC entry 2353 (class 1259 OID 16666)
-- Name: tiptra_trasol_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX tiptra_trasol_fk ON transporte_solicitado USING btree (tiptra_id);


--
-- TOC entry 2354 (class 1259 OID 16665)
-- Name: tra_sol_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX tra_sol_fk ON transporte_solicitado USING btree (estsol_id);


--
-- TOC entry 2349 (class 1259 OID 16657)
-- Name: traext_trainf_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX traext_trainf_fk ON transporte_informe USING btree (traasi_id);


--
-- TOC entry 2315 (class 1259 OID 16597)
-- Name: trainf_nousa_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX trainf_nousa_fk ON nousado USING btree (trainf_id);


--
-- TOC entry 2343 (class 1259 OID 16646)
-- Name: transporte_asignado_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX transporte_asignado_pk ON transporte_asignado USING btree (traasi_id);


--
-- TOC entry 2350 (class 1259 OID 16656)
-- Name: transporte_informe_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX transporte_informe_pk ON transporte_informe USING btree (trainf_id);


--
-- TOC entry 2355 (class 1259 OID 16664)
-- Name: transporte_solicitado_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX transporte_solicitado_pk ON transporte_solicitado USING btree (trasol_id);


--
-- TOC entry 2359 (class 1259 OID 16672)
-- Name: transporte_solicitadoextra_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX transporte_solicitadoextra_pk ON transporte_solicitadoextra USING btree (trasol_id2);


--
-- TOC entry 2344 (class 1259 OID 16650)
-- Name: tsolext_traasi_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX tsolext_traasi_fk ON transporte_asignado USING btree (trasol_id2);


--
-- TOC entry 2360 (class 1259 OID 16673)
-- Name: ttra_tsolext_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ttra_tsolext_fk ON transporte_solicitadoextra USING btree (tiptra_id);


--
-- TOC entry 2368 (class 1259 OID 16687)
-- Name: veh_vps_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX veh_vps_fk ON vehiculo_persona_comision USING btree (veh_id);


--
-- TOC entry 2369 (class 1259 OID 16686)
-- Name: vehiculo_persona_comision_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX vehiculo_persona_comision_pk ON vehiculo_persona_comision USING btree (vps_id);


--
-- TOC entry 2363 (class 1259 OID 16680)
-- Name: vehiculo_pk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX vehiculo_pk ON vehiculo USING btree (veh_id);


--
-- TOC entry 2345 (class 1259 OID 16649)
-- Name: vps_traasi_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX vps_traasi_fk ON transporte_asignado USING btree (vps_id);


--
-- TOC entry 2434 (class 2606 OID 49201)
-- Name: Modrol_Carper_carper_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY modrol_carper
    ADD CONSTRAINT "Modrol_Carper_carper_fk" FOREIGN KEY (carper_id) REFERENCES cargo_persona(carper_id);


--
-- TOC entry 2435 (class 2606 OID 49196)
-- Name: Modrol_Carper_modrol_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY modrol_carper
    ADD CONSTRAINT "Modrol_Carper_modrol_fk" FOREIGN KEY (modrol_id) REFERENCES modulo_rol(modrol_id);


--
-- TOC entry 2390 (class 2606 OID 57683)
-- Name: anexo_informe_estado_informe; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY anexo_informe
    ADD CONSTRAINT anexo_informe_estado_informe FOREIGN KEY (estinf_id) REFERENCES estado_informe(estinf_id);


--
-- TOC entry 2401 (class 2606 OID 49216)
-- Name: carper_car_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY cargo_persona
    ADD CONSTRAINT carper_car_fk FOREIGN KEY (car_id) REFERENCES cargo(car_id);


--
-- TOC entry 2388 (class 2606 OID 16690)
-- Name: fk_acceso_p_accper_pe_persona; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY acceso_persona
    ADD CONSTRAINT fk_acceso_p_accper_pe_persona FOREIGN KEY (per_id) REFERENCES persona(per_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2389 (class 2606 OID 16695)
-- Name: fk_anexo_ane_sol_estado_s; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY anexo
    ADD CONSTRAINT fk_anexo_ane_sol_estado_s FOREIGN KEY (estsol_id) REFERENCES estado_solicitud(estsol_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2392 (class 2606 OID 57693)
-- Name: fk_autoriza_aut_autin_autoriza; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY autorizado_informe
    ADD CONSTRAINT fk_autoriza_aut_autin_autoriza FOREIGN KEY (aut_id) REFERENCES autorizacion(aut_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2394 (class 2606 OID 16720)
-- Name: fk_autoriza_aut_autso_autoriza; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY autorizado_solicitud
    ADD CONSTRAINT fk_autoriza_aut_autso_autoriza FOREIGN KEY (aut_id) REFERENCES autorizacion(aut_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2393 (class 2606 OID 57698)
-- Name: fk_autoriza_estinf_aut_estadoinf; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY autorizado_informe
    ADD CONSTRAINT fk_autoriza_estinf_aut_estadoinf FOREIGN KEY (estinf_id) REFERENCES estado_informe(estinf_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2391 (class 2606 OID 16705)
-- Name: fk_autoriza_per_aut_persona; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY autorizacion
    ADD CONSTRAINT fk_autoriza_per_aut_persona FOREIGN KEY (per_id) REFERENCES persona(per_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2395 (class 2606 OID 16730)
-- Name: fk_autoriza_sol_aut_estado_s; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY autorizado_solicitud
    ADD CONSTRAINT fk_autoriza_sol_aut_estado_s FOREIGN KEY (estsol_id) REFERENCES estado_solicitud(estsol_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2397 (class 2606 OID 16740)
-- Name: fk_banco_pe_ban_banpe_banco; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY banco_persona
    ADD CONSTRAINT fk_banco_pe_ban_banpe_banco FOREIGN KEY (ban_id) REFERENCES banco(ban_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2396 (class 2606 OID 16735)
-- Name: fk_banco_pe_banper_pe_persona; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY banco_persona
    ADD CONSTRAINT fk_banco_pe_banper_pe_persona FOREIGN KEY (per_id) REFERENCES persona(per_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2398 (class 2606 OID 16745)
-- Name: fk_cargo_dep_car_departam; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY cargo
    ADD CONSTRAINT fk_cargo_dep_car_departam FOREIGN KEY (dep_id) REFERENCES departamento(dep_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2399 (class 2606 OID 57413)
-- Name: fk_cargo_rol; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY cargo
    ADD CONSTRAINT fk_cargo_rol FOREIGN KEY (rol_id) REFERENCES rol(rol_id);


--
-- TOC entry 2403 (class 2606 OID 16770)
-- Name: fk_ciudad_c_ciu_ciuco_ciudad; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY ciudad_comision
    ADD CONSTRAINT fk_ciudad_c_ciu_ciuco_ciudad FOREIGN KEY (ciu_id) REFERENCES ciudad(ciu_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2404 (class 2606 OID 16775)
-- Name: fk_ciudad_c_com_ciuco_comision; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY ciudad_comision
    ADD CONSTRAINT fk_ciudad_c_com_ciuco_comision FOREIGN KEY (com_id) REFERENCES comision(com_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2402 (class 2606 OID 16765)
-- Name: fk_ciudad_pro_ciu_provinci; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY ciudad
    ADD CONSTRAINT fk_ciudad_pro_ciu_provinci FOREIGN KEY (prov_id) REFERENCES provincia(prov_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2437 (class 2606 OID 57711)
-- Name: fk_ciudad_s_ciu_ciuin_ciudad; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY ciudad_informe
    ADD CONSTRAINT fk_ciudad_s_ciu_ciuin_ciudad FOREIGN KEY (ciu_id) REFERENCES ciudad(ciu_id);


--
-- TOC entry 2405 (class 2606 OID 16780)
-- Name: fk_ciudad_s_ciu_ciuso_ciudad; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY ciudad_solicitud
    ADD CONSTRAINT fk_ciudad_s_ciu_ciuso_ciudad FOREIGN KEY (ciu_id) REFERENCES ciudad(ciu_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2438 (class 2606 OID 57716)
-- Name: fk_ciudad_s_ciu_inf_estado_i; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY ciudad_informe
    ADD CONSTRAINT fk_ciudad_s_ciu_inf_estado_i FOREIGN KEY (estinf_id) REFERENCES estado_informe(estinf_id);


--
-- TOC entry 2406 (class 2606 OID 16785)
-- Name: fk_ciudad_s_ciu_sol_estado_s; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY ciudad_solicitud
    ADD CONSTRAINT fk_ciudad_s_ciu_sol_estado_s FOREIGN KEY (estsol_id) REFERENCES estado_solicitud(estsol_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2407 (class 2606 OID 16790)
-- Name: fk_departam_ins_dep_instituc; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY departamento
    ADD CONSTRAINT fk_departam_ins_dep_instituc FOREIGN KEY (ins_id) REFERENCES institucion(ins_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2436 (class 2606 OID 57665)
-- Name: fk_estado_s_inf_estif_informe; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY estado_informe
    ADD CONSTRAINT fk_estado_s_inf_estif_informe FOREIGN KEY (inf_id) REFERENCES informe(inf_id);


--
-- TOC entry 2408 (class 2606 OID 16795)
-- Name: fk_estado_s_sol_estso_solicitu; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY estado_solicitud
    ADD CONSTRAINT fk_estado_s_sol_estso_solicitu FOREIGN KEY (sol_id) REFERENCES solicitud(sol_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2409 (class 2606 OID 16800)
-- Name: fk_fondo_sol_val_solicitu; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY fondo
    ADD CONSTRAINT fk_fondo_sol_val_solicitu FOREIGN KEY (sol_id) REFERENCES solicitud(sol_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2410 (class 2606 OID 57721)
-- Name: fk_gasto_ciu_gas_ciudad_i; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY gasto
    ADD CONSTRAINT fk_gasto_ciu_gas_ciudad_i FOREIGN KEY (ciuinf_id) REFERENCES ciudad_informe(ciuinf_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2411 (class 2606 OID 57726)
-- Name: fk_gasto_estinf_gas_informe; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY gasto
    ADD CONSTRAINT fk_gasto_estinf_gas_informe FOREIGN KEY (estinf_id) REFERENCES estado_informe(estinf_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2412 (class 2606 OID 16820)
-- Name: fk_informe_sol_inf_solicitu; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY informe
    ADD CONSTRAINT fk_informe_sol_inf_solicitu FOREIGN KEY (sol_id) REFERENCES solicitud(sol_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2413 (class 2606 OID 16825)
-- Name: fk_modulo_r_mod_modro_modulo; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY modulo_rol
    ADD CONSTRAINT fk_modulo_r_mod_modro_modulo FOREIGN KEY (mod_id) REFERENCES modulo(mod_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2414 (class 2606 OID 16830)
-- Name: fk_modulo_r_rol_modro_rol; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY modulo_rol
    ADD CONSTRAINT fk_modulo_r_rol_modro_rol FOREIGN KEY (rol_id) REFERENCES rol(rol_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2415 (class 2606 OID 16835)
-- Name: fk_nousado_trainf_no_transpor; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY nousado
    ADD CONSTRAINT fk_nousado_trainf_no_transpor FOREIGN KEY (trainf_id) REFERENCES transporte_informe(trainf_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2416 (class 2606 OID 16840)
-- Name: fk_persona__com_perco_comision; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY persona_comision
    ADD CONSTRAINT fk_persona__com_perco_comision FOREIGN KEY (com_id) REFERENCES comision(com_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2417 (class 2606 OID 16845)
-- Name: fk_persona__per_perco_persona; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY persona_comision
    ADD CONSTRAINT fk_persona__per_perco_persona FOREIGN KEY (per_id) REFERENCES persona(per_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2418 (class 2606 OID 16850)
-- Name: fk_persona__sol_perco_solicitu; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY persona_comision
    ADD CONSTRAINT fk_persona__sol_perco_solicitu FOREIGN KEY (sol_id) REFERENCES solicitud(sol_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2419 (class 2606 OID 57424)
-- Name: fk_prov_pais; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY provincia
    ADD CONSTRAINT fk_prov_pais FOREIGN KEY (pais_id) REFERENCES pais(pais_id);


--
-- TOC entry 2420 (class 2606 OID 16855)
-- Name: fk_solicitu_per_sol_persona; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY solicitud
    ADD CONSTRAINT fk_solicitu_per_sol_persona FOREIGN KEY (per_id) REFERENCES persona(per_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2426 (class 2606 OID 57731)
-- Name: fk_transpor_estinf_train_informe; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY transporte_informe
    ADD CONSTRAINT fk_transpor_estinf_train_informe FOREIGN KEY (estinf_id) REFERENCES estado_informe(estinf_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2421 (class 2606 OID 16860)
-- Name: fk_transpor_sol_traas_estado_s; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY transporte_asignado
    ADD CONSTRAINT fk_transpor_sol_traas_estado_s FOREIGN KEY (estsol_id) REFERENCES estado_solicitud(estsol_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2429 (class 2606 OID 16900)
-- Name: fk_transpor_sol_tsole_estado_s; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY transporte_solicitadoextra
    ADD CONSTRAINT fk_transpor_sol_tsole_estado_s FOREIGN KEY (estsol_id) REFERENCES estado_solicitud(estsol_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2422 (class 2606 OID 16865)
-- Name: fk_transpor_tiptra_tr_tipo_tra; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY transporte_asignado
    ADD CONSTRAINT fk_transpor_tiptra_tr_tipo_tra FOREIGN KEY (tiptra_id) REFERENCES tipo_transporte(tiptra_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2427 (class 2606 OID 16890)
-- Name: fk_transpor_tiptra_tr_tipo_tra; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY transporte_solicitado
    ADD CONSTRAINT fk_transpor_tiptra_tr_tipo_tra FOREIGN KEY (tiptra_id) REFERENCES tipo_transporte(tiptra_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2428 (class 2606 OID 16895)
-- Name: fk_transpor_tra_sol_estado_s; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY transporte_solicitado
    ADD CONSTRAINT fk_transpor_tra_sol_estado_s FOREIGN KEY (estsol_id) REFERENCES estado_solicitud(estsol_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2425 (class 2606 OID 16885)
-- Name: fk_transpor_traext_tr_transpor; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY transporte_informe
    ADD CONSTRAINT fk_transpor_traext_tr_transpor FOREIGN KEY (traasi_id) REFERENCES transporte_asignado(traasi_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2423 (class 2606 OID 16870)
-- Name: fk_transpor_tsolext_t_transpor; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY transporte_asignado
    ADD CONSTRAINT fk_transpor_tsolext_t_transpor FOREIGN KEY (trasol_id2) REFERENCES transporte_solicitadoextra(trasol_id2) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2430 (class 2606 OID 16905)
-- Name: fk_transpor_ttra_tsol_tipo_tra; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY transporte_solicitadoextra
    ADD CONSTRAINT fk_transpor_ttra_tsol_tipo_tra FOREIGN KEY (tiptra_id) REFERENCES tipo_transporte(tiptra_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2424 (class 2606 OID 16875)
-- Name: fk_transpor_vps_traas_vehiculo; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY transporte_asignado
    ADD CONSTRAINT fk_transpor_vps_traas_vehiculo FOREIGN KEY (vps_id) REFERENCES vehiculo_persona_comision(vps_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2431 (class 2606 OID 16910)
-- Name: fk_vehiculo_com_vps_comision; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY vehiculo_persona_comision
    ADD CONSTRAINT fk_vehiculo_com_vps_comision FOREIGN KEY (com_id) REFERENCES comision(com_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2432 (class 2606 OID 16915)
-- Name: fk_vehiculo_per_vps_persona; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY vehiculo_persona_comision
    ADD CONSTRAINT fk_vehiculo_per_vps_persona FOREIGN KEY (per_id) REFERENCES persona(per_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2433 (class 2606 OID 16920)
-- Name: fk_vehiculo_veh_vps_vehiculo; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY vehiculo_persona_comision
    ADD CONSTRAINT fk_vehiculo_veh_vps_vehiculo FOREIGN KEY (veh_id) REFERENCES vehiculo(veh_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2400 (class 2606 OID 16760)
-- Name: per_carper_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY cargo_persona
    ADD CONSTRAINT per_carper_fk FOREIGN KEY (per_id) REFERENCES persona(per_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 2634 (class 0 OID 0)
-- Dependencies: 7
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2017-02-20 18:00:58

--
-- PostgreSQL database dump complete
--

-- Completed on 2017-02-20 18:00:58

--
-- PostgreSQL database cluster dump complete
--

